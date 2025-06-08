import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="content">
          <h1 className="title">404</h1>
          <p className="subtitle">Something's missing.</p>
          <p className="description">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
          <Link to="/" className="button">Back to Homepage</Link>
        </div>
      </div>
    </section>
  );
};

