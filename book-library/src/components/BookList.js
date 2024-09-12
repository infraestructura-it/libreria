import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Lista de Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
