/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";
// gOZ6ayJ9IcL8x7y2ImTP
const url =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gOZ6ayJ9IcL8x7y2ImTP/books";
const apiID = "dEKTcaMjVTpVo4TTyLFG";
const url2 = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const response = await fetch(url2);
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
  console.log(listbook);
  return listbook;
});

export const postData = createAsyncThunk("data/Post", async (book) => {
  await fetch(url2, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  return book;
});

export const deleteData = createAsyncThunk("data/Delete", async (id) => {
  await fetch(`${url2}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return id;
});

const dataSlice = createSlice({
  name: "books",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        const updatebook = [...state.data].filter(
          (data) => data.id !== action.payload
        );
        return { ...state, data: updatebook };
      });
  },
});

export default dataSlice;
