import React from "react";
//api requests url
import requests from "../api/requests";
//components
import Navbar from "../components/Movies/Navbar";
import Landing from "../components/Movies/Landing";
import Row from "../components/Movies/Row";
import Footer from "../components/Layout/Footer";
//css style
import "../css/Movies/Movies.css";
function Movies() {
  return (
    <div className="movies">
      <Navbar />
      <Landing />
      <div className="rows">
        <Row
          title="NETFLEX ORIGINALS"
          url={requests.NetflixOriginals}
          isLargeImg={true}
        />
        <Row title="Trending Now" url={requests.Trending} />
        <Row title="Top Rated" url={requests.TopRated} />
        <Row title="Action Movies" url={requests.ActionMovies} />
        <Row title="Comedy Movies" url={requests.ComedyMovies} />
        <Row title="Horror Movies" url={requests.HorrorMovies} />
        <Row title="Romantic Movies" url={requests.RomanticMovies} />
        <Row title="Documentaries Movies" url={requests.DocumentariesMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
