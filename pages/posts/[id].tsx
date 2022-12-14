import { GetStaticProps, GetStaticPaths } from 'next';

import Head from 'next/head';
import { FC } from 'react';
import PostInfo from '../../components/PostInfo';
import { IPostType } from '../../types';

// SSG статически подгружает страницы, все посты,в отдельный html
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  //    id обязательно строка
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

interface IPostProps {
  post: IPostType;
}

const Post: FC<IPostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
