import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Descripción: {book.description}</p>
    </div>
  );
};

export default BookDetail;
