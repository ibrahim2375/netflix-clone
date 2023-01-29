import React, { useState, useEffect, useRef } from "react";
//css file
import "../../css/Movies/Row.css";
//movie trailer packge to get url from youtube
import MovieTrailer from "movie-trailer";
//youtube to show videas from youtube
import YouTube from "react-youtube";
//axios base url
import axios from "../../api/axios";
let scrollLeft = 0;
let startX;
let isDown = false;

function Row({ title, url, isLargeImg }) {
  const [movies, setMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState("");
  // const [isDown, setIsDown] = useState(false);
  const row_movies_slider = useRef();
  //youtube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  //handle fetching api depend on section
  const fetchMovies = async () => {
    const request = await axios.get(url);
    setMovies(request?.data?.results);
    return request;
  };

  //show trailer
  const handleTrailer = async (movie) => {
    if (movieTrailer) {
      setMovieTrailer("");
    } else {
      await MovieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setMovieTrailer(urlParam.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [url]);

  //handle scrolling
  useEffect(() => {
    row_movies_slider.current.addEventListener("mousedown", (e) => {
      isDown = true;
      //get start point in page
      startX = e.pageX - row_movies_slider.current.offsetLeft;
      scrollLeft = row_movies_slider.current.scrollLeft;
    });
    row_movies_slider.current.addEventListener("mouseleave", () => {
      isDown = false;
    });
    row_movies_slider.current.addEventListener("mouseup", () => {
      isDown = false;
    });
    row_movies_slider.current.addEventListener("mousemove", (e) => {
      //check if its down
      if (!isDown) return;
      e.preventDefault();
      if (isDown) {
        //calculate cursor position
        let currentX = e.pageX - row_movies_slider.current.offsetLeft;
        //minse from the start point
        let moved = currentX - startX;
        //assign moved value to scroll left
        row_movies_slider.current.scrollLeft = scrollLeft - moved;
      }
    });
  }, [isDown]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_movies" ref={row_movies_slider}>
        {movies.map((movie) => (
          <img
            onClick={() => handleTrailer(movie)}
            className={`row_img ${isLargeImg && "row_img_large"} `}
            key={movie.id}
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
              isLargeImg ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name}
          />
        ))}
      </div>
      {movieTrailer && <YouTube videoId={movieTrailer} opts={opts} />}
    </div>
  );
}

export default Row;
