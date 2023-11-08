import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppContainer, Subtitle, Title } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      <Toaster />
    </AppContainer>
  );
};
