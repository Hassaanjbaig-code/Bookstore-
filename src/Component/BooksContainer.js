import React, { useState } from "react";
import Booklist from "./Booklist";

const BooksContainer = () => {
  // const { store , setstore } = useState({
  //     id: 1,
  //     Title : 'Hello',
  //     Author : 'Yes'
  // });
  const store = [
    {
      id: 1,
      Title: "Hello",
      Author: "Yes",
    },
    {
      id: 2,
      Title: "Hello",
      Author: "Yes",
    },
    {
      id: 3,
      Title: "Hello",
      Author: "Yes",
    },
  ];

  // const { id, Title, Author } = store
  return (
    <ul>
      {store.map((storedata) => (
        <Booklist store={storedata} />
      ))}
    </ul>
  );
};

export default BooksContainer;
