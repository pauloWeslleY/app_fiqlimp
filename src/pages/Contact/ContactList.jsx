import { ListItem, ListIcon } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiPhone } from 'react-icons/bi';
import styles from './styles.module.scss';

export const ContactListItem = () => {
   const getListItem = props => (
      <ContactList key={props.id} name={props.name} icon={props.icon} />
   );
   return props_contact.map(getListItem);
};

const ContactList = ({ name, icon }) => {
   return (
      <ListItem className={styles.list__content}>
         <ListIcon boxSize={'2rem'} as={icon} />
         <span>{name}</span>
      </ListItem>
   );
};

const props_contact = [
   {
      id: 1,
      icon: BiPhone,
      name: '+55 11 99845-6754',
   },
   {
      id: 2,
      icon: GoLocation,
      name: 'R. Amauri Souza, 346',
   },
   {
      id: 3,
      icon: AiOutlineMail,
      name: 'contato@fiqlimp.com',
   },
];
