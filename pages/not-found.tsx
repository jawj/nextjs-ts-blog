import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return <>
    <h1>Oops</h1>
    <p>Sorry, we couldn’t find that link.</p>
    <p><Link href='/'>Go home</Link></p>
  </>;
};

export default Home;
