/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// gOZ6ayJ9IcL8x7y2ImTP
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gOZ6ayJ9IcL8x7y2ImTP/books';
const url2 = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eZNPE2dPLtWHMUhnsTBH/books';

export const fetchData = createAsyncThunk('data/fetch', async () => {
    const response = await axios.get(url2);
    const datafound = response.data;
    const listbook = [];
    Object.keys(datafound).forEach((keys) => {
        const book = { id: keys, title: datafound[keys][0].title, author: datafound[keys][0].author, category: datafound[keys][0].category };
        listbook.push(book);
    })
    return listbook
});

const dataSlice = createSlice({
    name: 'books',
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.fulfilled, (state, action) => {
          state.data = action.payload;
        })

    }
})

export default dataSlice;