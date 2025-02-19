import ReactStars from "react-stars";
import PropTypes from "prop-types";

const MovieItem = ({ movie, rateMovie, toggleWatched, deleteMovie }) => {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };

  return (
    <div className="my-10 p-8 border rounded-lg">
      <li>
        <div className="flex gap-1.5 items-center ">
          <span
            className={`flex-1 mr-4 ${
              movie.watched ? "line-through text-gray-400" : "text-white"
            }`}
          >
            {movie.title} on {movie.ott} {movie.rating && `⭐${movie.rating}/5`}
          </span>
          <div>
            <ReactStars
              count={5}
              value={movie?.rating}
              onChange={ratingChange}
              size={24}
              color2="#FFD700"
            ></ReactStars>
          </div>
          <button
            className="btn btn-accent"
            onClick={() => toggleWatched(movie.id)}
          >
            {movie.watched ? "Unwatch" : "Watch"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => deleteMovie(movie.id)}
          >
            Remove
          </button>
        </div>
      </li>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ott: PropTypes.string.isRequired,
    rating: PropTypes.number,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieItem;
