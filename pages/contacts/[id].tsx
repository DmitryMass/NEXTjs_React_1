import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ContactsInfo from '../../components/ContactsInfo';
import { IContactType } from '../../types';
import { FC } from 'react';

// SSR Server side render подход
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

interface IContactProps {
  contact: IContactType;
}

const Contact: FC<IContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactsInfo contact={contact} />
    </>
  );
};

export default Contact;
