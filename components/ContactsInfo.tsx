import { FC } from 'react';
import TitleComponent from './Title';
import { IContactType } from '../types';

interface IContactsInfoProps {
  contact: IContactType;
}
const ContactsInfo: FC<IContactsInfoProps> = ({ contact }) => {
  const { name, email, adress } = contact || {};
  const { street, suite, city, zipcode } = adress || {};

  if (!contact) {
    return <TitleComponent tag={'h3'} text={'Empty contact'} />;
  }
  return (
    <>
      <TitleComponent tag={'h3'} text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactsInfo;
