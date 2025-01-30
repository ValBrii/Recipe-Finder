import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
           <div className="navbar-container">
                <h1 className="navbar-logo">Recipe Finder</h1>
                <ul className="navbar-links">
                       <li className="navbar-item">
                           <Link to="/" className="navbar-link">Home</Link>
                       </li>
                       <li className="navbar-item">
                           <Link to="/" className="navbar-link">Recipe list</Link>
                       </li>
                       <li className="navbar-item">
                           <Link to="/" className="navbar-link">Recipe</Link>
                       </li>
                       <li className="navbar-item">
                           <Link to="/" className="navbar-link">Search</Link>
                       </li>
                       <li className="navbar-item">
                           <Link to="/" className="navbar-link">Filter</Link>
                       </li>
                </ul>
         </div>
       </nav>
    );
 };
 export default Navbar;