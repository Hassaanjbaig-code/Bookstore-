import React from 'react';
import './Formbook.css'

const Formbook = () => {
  return (
    <form >
        <legend>Add New Book</legend>
        <input type="text" placeholder='Add title' />
        <input type="text" placeholder='Add Author' />
        <select >
            <option value='Action'>Action</option>
            <option value='Science Fiction'>Science Fiction</option>
            <option value='Economy'>Economy</option>
        </select>
        <input className='submitfrom' type="submit" value="Add Book" />
    </form>
  )
}

export default Formbook
