import { createAction, createReducer } from '@reduxjs/toolkit';

// gOZ6ayJ9IcL8x7y2ImTP
// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const initialstate = [
  {
    id: 1,
    bookcategory: 'Action',
    Title: 'The Hunger Games',
    Author: 'Suzanne Collins',
  },
  {
    id: 2,
    bookcategory: 'Science Fiction',
    Title: 'Dune',
    Author: 'Frank Herbert',
  },
  {
    id: 3,
    bookcategory: 'Economy',
    Title: 'Capital in the Twenty-First Century',
    Author: 'Suzanne Collins',
  },
];

export const AddBooks = createAction('bookstore/books/ADD_BOOK');
export const RemoveBooks = createAction('bookstore/books/REMOVE_BOOK');

const books = createReducer(initialstate, (builder) => {
  builder.addCase(AddBooks, (state, action) => {
    state.push(action.payload);
  });
  builder.addCase(RemoveBooks, (state = [...initialstate], action) => {
    const newstate = state.filter((book) => book.id !== action.payload);
    return newstate;
  });
  builder.addDefaultCase((state) => state);
});

export default books;
