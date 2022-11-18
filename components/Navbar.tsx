import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Navbar.module.scss';
import { NavigationInfo } from '../types';

const navigation: NavigationInfo[] = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.logo} href={'/'}>
          useNextjs
        </Link>
      </div>
      <div className={styles.nav__links}>
        {navigation.map(({ id, path, title }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.link__active : styles.link}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
