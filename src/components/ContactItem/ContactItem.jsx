import toast from 'react-hot-toast';
import {
  ContactItemContainer,
  ContactText,
  DeleteButton,
  StyledContactIcon,
  StyledDeleteContact,
  StyledPhoneIcon,
} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap() // Розпакування Promise, що повертається createAsyncThunk
      .then(() => {
        toast.success('Contact deleted successfully');
      })
      .catch(() => {
        toast.error('Failed to delete contact');
      });
  };

  return (
    <ContactItemContainer>
      <ContactText>
        <StyledContactIcon />
        {name}
      </ContactText>
      <ContactText>
        <StyledPhoneIcon />
        {number}
      </ContactText>

      <DeleteButton onClick={handleDelete}>
        <StyledDeleteContact />
        Delete
      </DeleteButton>
    </ContactItemContainer>
  );
};
