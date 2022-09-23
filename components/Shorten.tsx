import { useState, FormEvent, ChangeEvent } from 'react';

enum Status {
  EnteringURL,
  GettingShortURL,
  GotShortURL,
  Error,
}

export default function Shorten () {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [status, setStatus] = useState<Status>(Status.EnteringURL);
  const [error, setError] = useState('');
  
  function updateUrl(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
    setStatus(Status.EnteringURL);
  }

  async function getShortUrl(e: FormEvent) {
    e.preventDefault();
    setStatus(Status.GettingShortURL);

    const encodedUrl = encodeURIComponent(url);
    let data, response: Response;

    try {
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
    setStatus(Status.GotShortURL);
    setShortUrl(`${protocol}//${host}/` + data.shortUrl);
  };

  return <>
    <form onSubmit={getShortUrl}>
      <input type='text' size={40} value={url} onChange={updateUrl} placeholder='https://' />
      <input type='submit' value='Shorten' />    
    </form>
    { status === Status.EnteringURL ? <p>&nbsp;</p> : 
      status === Status.GettingShortURL ? <p className='waiting'>Shortening URL, please wait ...</p> :
      status === Status.GotShortURL ? <p className='shortened'><a href={shortUrl} target='_blank' rel='noreferrer'>{shortUrl}</a></p> :
      <p className='error'>Oops. {error}</p> }
  </>;
};
