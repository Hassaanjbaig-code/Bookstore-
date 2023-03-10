import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchData, deleteData } from '../redux/books/bookapi';
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
          <li className="show" key={book.id} id={book.id}>
            <div className="main-data-show">
              <h4 className="white">{book.category}</h4>
              <h2 className="white">{book.title}</h2>
              <p className="white">{book.author}</p>
              <button type="button">Comments</button>
              <button onClick={() => Deletehandle(book.id)} type="button"> Remove </button>
              <button type="button">Edit</button>
            </div>
            <div className="Progress white">
              <div className="Progress-show" />
              <p>
                <span>0%</span>
                <span>Completed</span>
              </p>
            </div>
            <div className="current-chapter-container white">
              <p className="white">CURRENT CHAPTER</p>
              <p className="white">Chapter</p>
              <button type="button" className="primary-button white">UPDATE-PROGRESS</button>
            </div>
          </li>
        ))}
        {bookHolder.data.lenght === 0 && <p>Kindle add add</p>}
      </ul>
      <Formbook />
    </>
  );
};

export default BooksContainer;
