import { createAction, createReducer } from '@reduxjs/toolkit';

const CheckStatus = createAction('bookstore/categories/CHECK_STATUS');

const initialstate = {};

const categories = createReducer(initialstate, (builder) => {
  builder.addCase(CheckStatus, (state) => [...state, 'Under construction']);
});

export default categories;
