import { configureStore } from '@reduxjs/toolkit';
import categories from './categories/categories';
import dataSlice from './books/bookapi';

const store = configureStore({
  reducer: {
    Categories: categories,
    bookApi: dataSlice.reducer,
  },
});

export default store;
