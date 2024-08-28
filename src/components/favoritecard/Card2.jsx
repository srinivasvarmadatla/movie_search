import React from "react";
import './Card2T.css';

function Card2({ title, description, image, date }) {

    return (
        <div className="card2">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">On: {date}</p>
            </div>
        </div>
    );
}

export default Card2;
