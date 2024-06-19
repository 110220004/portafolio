import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About me</Link></li>
      <li><Link to="/skills">abilities</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  </nav>
);

export default Navbar;
