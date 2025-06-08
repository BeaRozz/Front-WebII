import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg" alt="App Logo" />
          <span>The Rick & Morty App</span>
        </Link>

        <div className="navbar-links">
          <ul>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/episodes" className={isActive('/episodes')}>Episodes</Link></li>
            <li><Link to="/characters" className={isActive('/characters')}>Characters</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
