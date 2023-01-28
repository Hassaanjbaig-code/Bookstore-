import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Book',
    },
    {
      id: 1,
      path: '/Categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="nav-bar">
      <div className="nav-connect">
        <ul className="nav-menu">
          <h3 className="white">Bookstore CMS</h3>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="nav-item white">
                {link.text}
              </NavLink>
            </li>
          ))}
          <button className="user-icon-control" type="button">
            <FaUser className="user-icon" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
