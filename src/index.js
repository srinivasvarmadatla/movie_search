import React from 'react';
import ReactDOM from 'react-dom/client';
import { FavoritesProvider } from './context/favouriteContext.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';


import Login from "../src/pages/login/Login.jsx";
import Signup from './pages/signup/Signup.jsx';
import Search from './pages/search/Search.jsx';
import Movies from './pages/movies/Movie.jsx';
import Details from './pages/details/Details.jsx';
import Popular from './pages/popular/Popular.jsx';
import Favorite from './pages/favourite/Favorites.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/Search-page' element={<Search />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/detail' element={<Details />}/>
          <Route path='/Popular' element={<Popular />}/>
          <Route path='/favmovies' element={<Favorite />}/>
          <Route path='/details' element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
);
