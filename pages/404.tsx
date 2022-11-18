import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TitleComponent from '../components/Title';

import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
    return clearTimeout();
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <TitleComponent text={'404'} />
        <TitleComponent tag={'h2'} text={'Something wrong..'} />
      </div>
    </div>
  );
};

export default Error;
