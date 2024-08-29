import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './DetailsT.css';

const apiKey = process.env.REACT_APP_API_KEY;

function Details() {

    const [movieDetail, setMovieDetail] = useState(null);

    const location = useLocation();
    const { movieId } = location.state || {};

    const fetchMovieDetail = () => {
        if (movieId) {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject("Movie not found in the main API");
                    }
                    return res.json();
                })
                .then(json => setMovieDetail(json))
                .catch(error => {
                    console.error("Error fetching movie details:", error);
                    fetch(`https://api.themoviedb.org/3/movie/826510/recommendations?api_key=${apiKey}`)
                        .then(res => res.json())
                        .then(json => {
                            const foundMovie = json.results.find(movie => movie.id === parseInt(movieId));
                            if (foundMovie) {
                                setMovieDetail(foundMovie);
                            } else {
                                console.error("Movie not found in recommendations API either");
                            }
                        })
                        .catch(recommendationError => console.error("Error fetching recommendations:", recommendationError));
                });
        }
    };

    useEffect(() => {
        fetchMovieDetail();
    }, [movieId]);

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
