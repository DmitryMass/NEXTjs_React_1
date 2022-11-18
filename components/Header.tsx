import { FC } from 'react';
import Navbar from './Navbar';

import styles from '../styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
