import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const arrThunks = [addContact, deleteContact, fetchContacts];

const fn = type => arrThunks.map(el => el[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleFulfilledFetchContacts = (state, action) => {
  state.contacts.error = null;
};

const handleFulfilledAddContact = (state, action) => {
  state.contacts.error = null;
};

const handleFulfilledDelContact = (state, action) => {
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== action.payload.id
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDelContact)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
