import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number is not valid. Must be XXX-XX-XX'
    )
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(state => state.contacts.contacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        const isContactExists = currentContacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        if (isContactExists) {
          alert(`${values.name} is already in the phonebook`);
        } else {
          dispatch(addContact(values.name, values.number));
          actions.resetForm();
        }
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField name="name" placeholder="Enter name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledField name="number" placeholder="Enter number XXX-XX-XX" />
          <StyledErrorMessage name="number" component="div" />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
