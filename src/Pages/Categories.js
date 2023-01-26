/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const categories = () => {
  const dispatch = useDispatch();
  const handle = useSelector((state) => state.Categories.status)
  const handleClick = () => dispatch(CheckStatus());
  return (
    <div>
      <h3>{handle}</h3>
      <button onClick={handleClick} type='button'>CheckStatus</button>
    </div>
  )
}

export default categories;