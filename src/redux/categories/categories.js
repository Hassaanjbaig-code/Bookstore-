import { createAction, createReducer } from '@reduxjs/toolkit';

export const CheckStatus = createAction('bookstore/categories/CHECK_STATUS');

const initialstate = {
  status: '',
};

const categories = createReducer(initialstate, (builder) => {
  builder.addCase(CheckStatus, (state) => {
    const newstate = { ...state, status: 'Under construction' };
    return newstate;
  });
  builder.addDefaultCase((state) => state);
});

export default categories;
