import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import withLoading from '../components/withLoading';

const BookListWithLoading = withLoading(BookList);

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una llamada API
    setTimeout(() => {
      setBooks([
        { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', description: 'Una épica fantasía.' },
        { id: 2, title: '1984', author: 'George Orwell', description: 'Distopía futurista.' },
        { id: 3, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', description: 'Realismo mágico.' },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return <BookListWithLoading isLoading={isLoading} books={books} />;
};

export default HomePage;
