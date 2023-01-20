import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <ul className="nav-menu">
        <h3>Bookstore CMS</h3>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="nav-item">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
