import { FC, ReactNode } from 'react';

interface ITitleComponentProps {
  tag?: string | ReactNode | any;
  text?: string;
}
const TitleComponent: FC<ITitleComponentProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default TitleComponent;
