import Head from 'next/head';
import TitleComponent from '../components/Title';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lan4U</title>
      </Head>
      <TitleComponent text='Next.js App' />
    </div>
  );
}
