import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contact, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </Contact>
      ))}
    </List>
  );
};
