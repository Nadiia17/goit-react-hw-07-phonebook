import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contact, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = items || [];
  console.log(contacts);

  useEffect(() => {
    if (error) {
      // Викликаємо toast.error лише коли змінюється error
      toast.error(`Error loading contacts: ${error}`);
    }
  }, [error]);

  const filteredContacts = useSelector(selectVisibleContacts);
  console.log('Items:', items);
  console.log('Is Loading:', isLoading);
  console.log('Error:', error);
  return (
    <>
      {isLoading && <Loader />}

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
    </>
  );
};
