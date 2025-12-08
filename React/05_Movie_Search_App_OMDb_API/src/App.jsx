import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "8e9b4268";

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      setError(null);

      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);
          } else {
            setError(data.Error);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError("An error occurred while fetching data.");
          setLoading(false);
        });
    }
  }, [searchTerm, API_KEY]);

  const featchMovieDetails = (imdbID) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setSelectedMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch((error) => {
        setError("An error occurred while fetching movie details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Movie Search App</h1>
        <SearchBar onSearch={setSearchTerm} />
        {loading && <div className="text-center text-lg mt-4">Loading...</div>}
        {error && <div className="text-center text-red-500 mt-4">{error}</div>}
        <MovieList movies={movies} onMovieSelect={featchMovieDetails} />
        {selectedMovie && <MovieCard movie={selectedMovie} />}
        {selectedMovie && <MovieDetails movie={selectedMovie} close={() => setSelectedMovie(null)} />}
      </div>
    </>
  );
}

export default App;
