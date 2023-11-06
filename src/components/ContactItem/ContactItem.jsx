import {
  ContactItemContainer,
  ContactText,
  DeleteButton,
} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemContainer>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteButton onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ContactItemContainer>
  );
};
