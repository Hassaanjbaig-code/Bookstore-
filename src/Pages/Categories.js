import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const categories = () => {
  const dispatch = useDispatch(); // eslint-disable-line
  const handle = useSelector((state) => state.Categories.status); // eslint-disable-line
  const handleClick = () => dispatch(CheckStatus());
  return (
    <div>
      <h3>{handle}</h3>
      <button onClick={handleClick} type="button">CheckStatus</button>
    </div>
  );
};

export default categories;
