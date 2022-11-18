import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <div className='main__container'>
          <Component {...pageProps} />
        </div>
      </main>
    </Layout>
  );
}

export default MyApp;
