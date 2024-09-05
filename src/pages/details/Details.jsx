import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './DetailsT.css';

const apiKey = process.env.REACT_APP_API_KEY;

function Details() {
    const [movieDetail, setMovieDetail] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { movieId } = location.state || {};

    useEffect(() => {
        const fetchMovieDetail = async () => {
            if (!movieId) {
                setError("No movie ID provided.");
                return;
            }
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Movie not found");
                }
                const json = await response.json();
                setMovieDetail(json);
                setError(null);
            } catch (error) {
                setError(`Error fetching movie details: ${error.message}`);
                setMovieDetail(null);
            }
        };

        fetchMovieDetail();
    }, [movieId]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="movie-detail-container"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
            }}
        >
            <div className="movie-detail-content">
                <h1 className="movie-title">{movieDetail.title || movieDetail.original_title}</h1>
                <div className="movie-genres">
                    {movieDetail.genres && movieDetail.genres.map(genre => (
                        <span key={genre.id} className="genre">{genre.name}</span>
                    ))}
                </div>
                <p className="movie-overview">{movieDetail.overview}</p>
                <p className="movie-runtime">Runtime: {movieDetail.runtime} minutes</p>
            </div>
        </div>
    );
}

export default Details;
