import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul>
      <li>
        <Link to="/" className="nav-item">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-item">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
