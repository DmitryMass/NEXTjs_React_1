import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
