import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postData } from '../redux/books/bookapi';
import './Formbook.css';

const Formbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategories] = useState('');
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault();
    const newbook = {
      id: nanoid(), title, author, category,
    };
    dispatch(postData(newbook));
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
      <select required value={category} onChange={(e) => setCategories(e.target.value)}>
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
