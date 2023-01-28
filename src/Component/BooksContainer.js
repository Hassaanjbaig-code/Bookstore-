import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchData, deleteData } from '../redux/books/bookapi';
// import Booklist from './Booklist';
import Formbook from './Formbook';
import './BooksContainer.css';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const show = dispatch(fetchData());
    return show;
  };
  const bookHolder = useSelector((state) => state.bookApi);
  function handleClick2() {
    return bookHolder;
  }
  function Deletehandle(id) {
    console.log(id);
    const requestdelete = dispatch(deleteData(id));
    return requestdelete;
  }
  return (
    <>
      <button type="button" onClick={handleClick}>Click me to show in redux</button>
      <ul>
        {bookHolder.data.map((book) => (
          <li key={book.id} id={book.id}>
            <h4>{book.category}</h4>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button onClick={() => Deletehandle(book.id)} type="button"> Remove </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClick2}>Click me to show in data in terminal</button>
      <Formbook />
    </>
  );
};

export default BooksContainer;
