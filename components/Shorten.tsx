import { useState, createRef, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';

enum Status {
  EnteringUrl,
  GettingShortUrl,
  GotShortUrl,
  CopiedUrl,
  Error,
}

export default function Shorten() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [status, setStatus] = useState<Status>(Status.EnteringUrl);
  const [error, setError] = useState('');

  const shortUrlInputRef = createRef<HTMLInputElement>();

  function updateUrl(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
    setStatus(Status.EnteringUrl);
  }

  async function getShortUrl(e: FormEvent) {
    e.preventDefault();
    setStatus(Status.GettingShortUrl);

    let data, response: Response;
    try {
      const encodedUrl = encodeURIComponent(url);
      response = await fetch(`/api/shorten?url=${encodedUrl}`);
      data = await response.json();

    } catch (e: any) {
      setStatus(Status.Error);
      setError(e.message);
      return;
    }

    if (response.status !== 200) {
      setStatus(Status.Error);
      setError(data.error);
      return;
    }

    const { protocol, host } = location;
    setStatus(Status.GotShortUrl);
    setShortUrl(`${protocol}//${host}/` + data.token);
  };

  function selectShortUrl() {
    shortUrlInputRef.current!.select();
  }

  function copyShortUrl() {
    selectShortUrl();
    document.execCommand('copy');
    setStatus(Status.CopiedUrl);
  }

  return <>
    <form onSubmit={getShortUrl}>
      <input type='text' size={40} value={url} onChange={updateUrl} placeholder='https://example.com/url/to/be/shortened' />
      <input type='submit' value='Shorten' />
    </form>
    <div id='result'>
      {status === Status.EnteringUrl ? null :
        status === Status.GettingShortUrl ? <p className='waiting'><Image src='/puff.svg' alt='Loading' width={20} height={20} /> Shortening URL …</p> :
          status === Status.GotShortUrl || status === Status.CopiedUrl ? <p className='shortened'>
            <input type='text' value={shortUrl} ref={shortUrlInputRef} onClick={selectShortUrl} readOnly />{' '}
            <Image src={status === Status.CopiedUrl ? '/check.svg' : '/copy.svg'} alt="Copy" width={20} height={24} onClick={copyShortUrl} />
          </p> :
            <p className='error'>Oops. {error}</p>}
    </div>
  </>;
};
