import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

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
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">
        <BsFillPersonFill />
      </span>
    </button>
  </nav>
);

export default Navbar;
