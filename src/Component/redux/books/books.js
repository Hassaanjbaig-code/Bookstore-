import { createAction, createReducer } from '@reduxjs/toolkit';

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

const AddBooks = createAction('books/add');
const RemoveBooks = createAction('books/remove');

const books = createReducer(initialstate, (builder) => {
  builder.addCase(AddBooks, (state, action) => {
    state.push(action.payload);
  });
  builder.addCase(RemoveBooks, (state, action) => {
    state.filter((book) => book.id !== action.payload);
  });
  builder.addDefaultCase((state) => state);
});

export default books;
