import React, { useState, useEffect } from "react";

//css style
import "../../css/Movies/Landing.css";
//axios request
import axios from "../../api/axios";
//api requests url
import requests from "../../api/requests";

function Landing() {
  const [movie, setMovie] = useState([]);
  //handle show movie in a header
  const FetchMovie = async () => {
    const request = await axios.get(requests.NetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  };
  //   handle truncate text func
  const truncate = (str, num) => {
    return str?.length > num ? str?.substr(0, num - 1) + "..." : str;
  };

  useEffect(() => {
    FetchMovie();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(${import.meta.env?.VITE_IMAGE_BASE_URL}${
          movie?.backdrop_path
        })`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        {/* title */}
        <h1 className="title">{movie?.title || movie?.name}</h1>
        {/* buttons */}
        <div className="header_buttons">
          <button className="header_button">Play</button>
          <button className="header_button">My List</button>
        </div>
        {/* description */}
        <div className="header_description">
          {truncate(movie?.overview, 160)}
        </div>
      </div>
      {/* fade bottom */}
      <div className="header_fadebottom"></div>
    </header>
  );
}

export default Landing;
