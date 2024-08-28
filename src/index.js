import React from 'react';
import ReactDOM from 'react-dom/client';
import { FavoritesProvider } from './context/favouriteContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesProvider>
);
