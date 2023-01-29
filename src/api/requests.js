const requests = {
  Trending: `/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=27`,
  RomanticMovies: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=10749`,
  DocumentariesMovies: `/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=99`,
};
export default requests;
