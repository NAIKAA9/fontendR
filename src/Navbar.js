import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User1</Link>
      <Link to="/contact">Contact</Link>
      <Link to="*">NotFound</Link>
    </nav>
  );
};

export default Navbar;
