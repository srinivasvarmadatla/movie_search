import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchT.css";

function Search() {
    const [movieName, setMovieName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Movies', { state: { movieName } });
    };


    return (
        <>
            <div className="container1">
                <h3 style="color:white;">(PLEASE ON VPN IF PAGE IS NOT LODING ANYTHING)</h3>
                <Link to='/Popular'><button>Popular</button></Link>
                <Link to='/Movies'><button>Recommend?</button></Link>
                <Link to='/favmovies'><button>Favorites</button></Link>
            </div>
            <div className="container2">
                <h1>Serach your movie name</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Enter movie"
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    );
}

export default Search;
