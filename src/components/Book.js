// src/components/Book.js
import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="book-container">
      <div className="book-cover">
        <h1 className="text-4xl font-bold text-white">My Book Title</h1>
      </div>
      <div className={`book-pages ${currentPage % 2 === 0 ? 'flip' : ''}`}>
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className={`book-page ${
              currentPage === index + 1 ? 'current-page' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            <h2 className="text-2xl font-bold mb-4">Page {index + 1}</h2>
            <p>Your book content goes here...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
