import React from 'react'

const Booklist = (props) => {
    const { store: { id, Title, Author } } = props;
  return (
    <>
      <li id={id}>
            <h3>{Title}</h3>
            <h3>{Author}</h3>
            <button type='button'> Remove </button>
        </li>
    </>
  )
}

export default Booklist
