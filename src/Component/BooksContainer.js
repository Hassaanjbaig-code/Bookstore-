import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchData } from '../redux/books/bookapi';
import Booklist from './Booklist';
import Formbook from './Formbook';
import './BooksContainer.css';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();
  const handleClick = () => {
    const show = dispatch(fetchData());
    return show;
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Click me to show data</button>
      <ul>
        {books.map((book) => (
          <Booklist
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Formbook />
    </>
  );
};

export default BooksContainer;
