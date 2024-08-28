import React from 'react';
import ReactDOM from 'react-dom/client';
import { FavoritesProvider } from './context/favouriteContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Search from './pages/search/Search';
import Movies from './pages/movies/Movie';
import Details from './pages/details/Details';
import Popular from './pages/popular/Popular';
import Favorite from './pages/favourite/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/Search-page' element={<Search />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/detail' element={<Details />} />
        <Route path='/Popular' element={<Popular />} />
        <Route path='/favmovies' element={<Favorite />} />
        <Route path='*' element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
);
