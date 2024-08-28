import React, { useContext } from 'react';
import { FavoritesContext } from '../../context/favouriteContext.js';
import './FavoriteT.css';

import Card2 from '../../components/favoritecard/Card2.jsx';

function Favorite() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div>
            <h1>Favorite Movies</h1>
            {favorites.length > 0 ? (
                <div className='movies-grid'>
                    {favorites.map((movie)=>(
                        <Card2
                        key={movie.id}
                        image={movie.image}
                        title={movie.title}
                        date={movie.date}
                        description={movie.description}
                    />
                    ))}
                </div>
            ) : (
                <p className='no-favs'>No favorite movies added yet.</p>
            )}
        </div>
    );
}

export default Favorite;
