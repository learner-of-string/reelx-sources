import Header from "./Container/Header";
import MovieForm from "./Container/MovieForm";
import MovieList from "./Container/MovieList";
import Filter from "./Container/Filter";
import { useState } from "react";

const browserLocalStorage = "reelxMovieListAddedByUser";

const Container = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(browserLocalStorage)) || []
  );
  const [filterType, setFilterType] = useState("all");

  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem(browserLocalStorage, JSON.stringify(updatedMovies));
  };

  const rateMovie = (id, rating) => {
    const movieRating = movies.map((movie) =>
      movie.id === id ? { ...movie, rating } : movie
    );
    setMovies(movieRating);
  };

  const toggleWatched = (id) => {
    const isWatched = movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(isWatched);
    localStorage.setItem(browserLocalStorage, JSON.stringify(isWatched));
  };
  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem(browserLocalStorage, JSON.stringify(updatedMovies));
  };

  const filteredMovie = movies.filter((movie) => {
    return filterType === "watched"
      ? movie.watched
      : filterType === "unwatched"
      ? !movie.watched
      : true;
  });

  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <Header></Header>
      <MovieForm addMovie={addMovie}></MovieForm>
      <Filter setFilterType={setFilterType}></Filter>
      <MovieList
        movies={filteredMovie}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      ></MovieList>
      <footer>
        <a
          href="https://github.com/learner-of-string/reelx-sources.git"
          className=""
        >
          Source Code:
          <span className="text-blue-400 font-semibold p-1 border-2 rounded-lg">
            ReelX
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Container;
