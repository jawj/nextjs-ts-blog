import type { NextPage } from 'next';
import Link from 'next/link';
import Page from '../components/Page';

const Home: NextPage = () => {
  return <Page>
    <p>Sorry, we couldn’t find that link.</p>
    <p><Link href='/'>Go home</Link></p>
  </Page>;
};

export default Home;
