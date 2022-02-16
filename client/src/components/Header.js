import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "../styles/Header.css"

function Header() {
  return (
    <nav className="header">
      <div><h1 className="headerTitle">Torakkā</h1></div>
      <div><h3 className="headerSubTitle">Video Game Tracker</h3></div>
      <div className="nav">
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
        </div>
        <div className="login">
      <Login /></div>
    </nav>
  );
}
export default Header;