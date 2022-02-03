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
          <Link to="/games">View Your Games</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;