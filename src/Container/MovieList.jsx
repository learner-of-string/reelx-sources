import PropTypes from "prop-types";
import MovieItem from "./MovieList/MovieItem";

const MovieList = ({
  movies,
  rateMovie,
  toggleWatched,
  deleteMovie,
  searchMovie,
}) => {
  // console.log(searchMovie);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <ul>
      {filteredMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          rateMovie={rateMovie}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        ></MovieItem>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ott: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
      rating: PropTypes.number,
    })
  ).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  searchMovie: PropTypes.string.isRequired,
};

export default MovieList;
