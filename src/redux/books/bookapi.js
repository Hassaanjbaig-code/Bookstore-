import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gOZ6ayJ9IcL8x7y2ImTP/books';
export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await fetch(url);
  const datafound = await response.json();
  const listbook = [];
  Object.keys(datafound).forEach((keys) => {
    const book = {
      id: keys,
      title: datafound[keys][0].title,
      author: datafound[keys][0].author,
      category: datafound[keys][0].category,
    };
    listbook.push(book);
  });
  return listbook;
});

export const postData = createAsyncThunk('data/Post', async (book) => {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  return book;
});

export const deleteData = createAsyncThunk('data/Delete', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return id;
});

const dataSlice = createSlice({
  name: 'books',
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.data = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        const updatebook = [...state.data].filter(
          (data) => data.id !== action.payload,
        );
        return { ...state, data: updatebook };
      });
  },
});

export default dataSlice;
