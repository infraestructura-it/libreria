import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importamos Routes en lugar de Switch
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookDetail from './components/BookDetail';

const App = () => {
  const books = [
    { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', description: 'Una épica fantasía.' },
    { id: 2, title: '1984', author: 'George Orwell', description: 'Distopía futurista.' },
    { id: 3, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', description: 'Realismo mágico.' },
  ];

  return (
    <Router>
      <div>
        <nav>
          {/* Usamos Link para la navegación en lugar de <a> */}
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        
        {/* Utilizamos Routes en lugar de Switch */}
        <Routes>
          {/* Definimos las rutas con element en lugar de component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Para rutas dinámicas, pasamos directamente el componente en element */}
          <Route path="/books/:id" element={<BookDetail books={books} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
