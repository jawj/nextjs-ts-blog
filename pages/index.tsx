import type { NextPage } from 'next';
import Shorten from '../components/Shorten';

const Home: NextPage = () => {
  return <>
    <h1>Shorten that URL</h1>
    <Shorten />
  </>;
}

export default Home;