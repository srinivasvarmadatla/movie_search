import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (movie) => {
        setFavorites([movie,...favorites]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
