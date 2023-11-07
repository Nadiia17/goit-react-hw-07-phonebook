import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contact, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );
  // const contacts = useSelector(state => state.contacts.items) || [];
  const contacts = items || [];
  const filter = useSelector(state => state.filter.filter);
  console.log(contacts);

  if (isLoading) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error loading contacts: {error}</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log('Items:', items);
  console.log('Is Loading:', isLoading);
  console.log('Error:', error);
  return (
    <List>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.phone}
            id={contact.id}
          />
        </Contact>
      ))}
    </List>
  );
};
