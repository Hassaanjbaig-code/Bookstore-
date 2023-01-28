import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchData, deleteData } from '../redux/books/bookapi';
// import Booklist from './Booklist';
import Formbook from './Formbook';
import './BooksContainer.css';

const BooksContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const bookHolder = useSelector((state) => state.bookApi);
  function Deletehandle(id) {
    const requestdelete = dispatch(deleteData(id));
    return requestdelete;
  }
  return (
    <>
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
      <Formbook />
    </>
  );
};

export default BooksContainer;
