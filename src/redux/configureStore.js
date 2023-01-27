import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import dataSlice from './books/bookapi';

const store = configureStore({
  reducer: {
    books: dataSlice,
  },
},
applyMiddleware((thunk)));

export default store;
