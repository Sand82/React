import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setError(null);
    setIsLoading(true);
    try {
      let response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      let data = await response.json();

      const dataTransformedMovies = data.results.map((x) => {
        return {
          id: x.episode_id,
          title: x.title,
          openingText: x.opening_crawl,
          releaseDate: x.release_date,
        };
      });
      setMovies(dataTransformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <h2>Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
