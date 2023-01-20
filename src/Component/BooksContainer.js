import React from 'react';
import Booklist from './Booklist';
import Formbook from './Formbook';

const BooksContainer = () => {
  // const { store , setstore } = useState({
  //     id: 1,
  //     Title : 'Hello',
  //     Author : 'Yes'
  // });
  const store = [
    {
      id: 1,
      bookcategory: 'Action',
      Title: 'The Hunger Games',
      Author: 'Suzanne Collins',
    },
    {
      id: 2,
      bookcategory: 'Science Fiction',
      Title: 'Dune',
      Author: 'Frank Herbert',
    },
    {
      id: 3,
      bookcategory: 'Economy',
      Title: 'Capital in the Twenty-First Century',
      Author: 'Suzanne Collins',
    },
  ];

  // const { id, Title, Author } = store
  return (
    <>
      <ul>
        {store.map((storedata) => (
          <Booklist key={storedata.id} store={storedata} />
        ))}
      </ul>
      <Formbook />
    </>
  );
};

export default BooksContainer;
