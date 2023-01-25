import { createAction, createReducer } from '@reduxjs/toolkit';

const CheckStatus = createAction('categories/Check_Status');

const initialstate = {};

const categories = createReducer(initialstate, (builder) => {
  builder.addCase(CheckStatus, (state) => [...state, 'Under construction']);
});

export default categories;
