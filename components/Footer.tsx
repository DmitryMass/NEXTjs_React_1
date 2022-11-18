import { FC } from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>Dat is Footer babe!</div>
    </footer>
  );
};

export default Footer;
