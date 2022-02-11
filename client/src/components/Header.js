import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/registration">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;