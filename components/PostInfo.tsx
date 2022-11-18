import { FC } from 'react';
import { IPostType } from '../types';
import TitleComponent from './Title';

interface IPostInfoProps {
  post: IPostType;
}

const PostInfo: FC<IPostInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <TitleComponent tag='h3' text='Empty post' />;
  }

  return (
    <>
      <TitleComponent tag='h3' text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
