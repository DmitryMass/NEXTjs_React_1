import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import TitleComponent from '../../components/Title';

import styles from '../../styles/Contacts.module.scss';
import { IContactType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

interface IContactsProps {
  contacts: IContactType[];
}

const Contacts: FC<IContactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className={styles.contacts}>
        <TitleComponent text={'Contact List:'} />
        <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
