import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?apikey=d22e04bf";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch movies from API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]); // No movies found
    }
  };

  // Run on page load
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      <div className="movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <div>
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                  alt={movie.Title}
                />
              </div>
              <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
};

export default App;
