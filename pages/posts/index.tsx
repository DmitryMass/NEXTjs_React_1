import { GetStaticProps } from 'next';

import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import TitleComponent from '../../components/Title';

import styles from '../../styles/Contacts.module.scss';
import { IPostsType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

interface IPostsProps {
  posts: IPostsType[];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className={styles.contacts}>
        <TitleComponent text={'Posts List:'} />
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
