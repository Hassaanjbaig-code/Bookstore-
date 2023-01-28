import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import dataSlice from './books/bookapi';

const store = configureStore({
  reducer: {
    category: categoriesReducer,
    bookApi: dataSlice.reducer, // to the api storage
  },
});

export default store;
