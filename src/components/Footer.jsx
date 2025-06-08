import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Link to="/" className="footer-brand">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg" alt="Logo" />
            <span>The Rick & Morty App</span>
          </Link>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/licensing">Licensing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <hr className="footer-separator" />
        <span className="footer-copy">
          © 2025 <Link to="/">The Rick & Morty App™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
