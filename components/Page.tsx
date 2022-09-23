import { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Page({ children }: { children: ReactNode }) {
  return <>
    <Head><title>URL shortener</title></Head>

    <main>
      <h1>Shorten that URL</h1>
      {children}
    </main>

    <footer>
      <span>Powered by</span>
      <a href="https://neon.tech">
        <Image src="/neon.svg" alt="Neon logo" width={92} height={26} />
      </a>
      <a href="https://vercel.com" target="_blank" rel="noreferrer">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  </>
}