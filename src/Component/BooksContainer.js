import { useSelector } from 'react-redux';
import React from 'react';
import Booklist from './Booklist';
import Formbook from './Formbook';
import './BooksContainer.css';

const BooksContainer = () => {
  const book = useSelector((state) => state.Book);
  return (
    <>
      <ul className="Booklist">
        {book.map((storedata) => (
          <Booklist key={storedata.id} store={storedata} />
        ))}
      </ul>
      <Formbook />
    </>
  );
};

export default BooksContainer;
