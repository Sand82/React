import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        const dataTransformedMovies = data.results.map((x) => {
          return {
            id: x.episode_id,
            title: x.title,
            openingText: x.opening_crawl,
            releaseDate: x.release_date,
          };
        });
        setMovie(dataTransformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
