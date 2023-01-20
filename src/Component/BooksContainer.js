import React from "react";
import Booklist from "./Booklist";
import Formbook from "./Formbook";

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
    <>
    <ul>
      {store.map((storedata) => (
        <Booklist store={storedata} />
      ))}
    </ul>
    <Formbook />
    </>
  );
};

export default BooksContainer;
