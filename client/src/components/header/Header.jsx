import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">KIMTOAN</Link>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
