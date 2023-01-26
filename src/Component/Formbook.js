import React, { useState } from 'react';
import './Formbook.css';
import { useDispatch } from 'react-redux';
import { AddBooks } from '../redux/books/books';

let counter = 3;

const Formbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault();
    dispatch(
      AddBooks({
        id: counter += 1,
        bookcategory: categories,
        Title: title,
        Author: author,
      }),
    );
  };
  return (
    <form onSubmit={handleclick}>
      <legend>Add New Book</legend>
      <input
        type="text"
        name="title"
        required
        className="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Add title"
      />
      <input
        type="text"
        name="Author"
        required
        className="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        placeholder="Add Author"
      />
      <select required value={categories} onChange={(e) => setCategories(e.target.value)}>
        <option> </option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <input className="submitfrom" type="submit" value="Add Book" />
    </form>
  );
};

export default Formbook;
