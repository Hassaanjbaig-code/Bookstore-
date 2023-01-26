import React from 'react';
import './Booklist.css';
import { useDispatch } from 'react-redux';
import { RemoveBooks } from '../redux/books/books';

const Booklist = (props) => {
  const dispatch = useDispatch();
  const {
    store: {
      id, bookcategory, Title, Author,
    },
  } = props;
  const handleClick = () => {
    dispatch(RemoveBooks(id));
  };
  return (
    <>
      <li className="Show" id={id}>
        <h4>{bookcategory}</h4>
        <h2>{Title}</h2>
        <p>{Author}</p>
        <button onClick={handleClick} type="button"> Remove </button>
      </li>
    </>
  );
};

export default Booklist;
