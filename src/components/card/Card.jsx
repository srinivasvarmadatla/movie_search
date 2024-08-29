import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from '../../context/favouriteContext.js'; 
import './CardT.css';

function Card({ title, description, image, date,id}) {

    const navigate=useNavigate();

    const showdetails=()=>{
        navigate("/detail",{state:{movieId:id}});
    };


    const { addFavorite } = useContext(FavoritesContext); 

    const handleAddFavorite = () => {
        alert("movie is added to favorites");
        const movie = { title, description, image, date};
        addFavorite(movie);
    };

    return (
        <div className="Card">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-date">On: {date}</p>
                <button className="card-button" onClick={showdetails}>Show</button>
                <img src="C:/engineeering/movie-search/public/assets/like.png" alt="like" className="like-img" onClick={handleAddFavorite} />
            </div>
        </div>
    );
}

export default Card;
