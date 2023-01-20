import React from 'react'
import './Booklist.css'

const Booklist = (props) => {
    const { store: { id, bookcategory, Title, Author } } = props;
  return (
    <>
      <li className='Show' id={id}>
            <h4>{bookcategory}</h4>
            <h2>{Title}</h2>
            <p>{Author}</p>
            <button type='button'> Remove </button>
        </li>
    </>
  )
}

export default Booklist
