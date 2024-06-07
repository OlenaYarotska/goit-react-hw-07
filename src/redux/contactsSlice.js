import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, state => {
            state.error = false;
            state.loading = true;
            })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchContacts.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(addContact.pending, state => {
            state.error = false;
            state.loading = true;
            })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, state => {
            state.error = false;
            state.loading = true;
            })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.loading = false;
        })
        .addCase(deleteContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
    }
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading
export const selectIsError = state => state.contacts.error;


export const selectFilteredContacts = createSelector(
[selectContacts, state => state.filters.name],
    (contacts, filteredNames) => {
return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filteredNames.toLowerCase()));
    }
)


export default contactsSlice.reducer;


