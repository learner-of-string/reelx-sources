import ReactStars from "react-stars";
import PropTypes from "prop-types";

const MovieItem = ({ movie, rateMovie, toggleWatched, deleteMovie }) => {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };

  const fixUrl = (url) => {
    const hasProtocol = /^https?:\/\//.test(url);

    if (!hasProtocol) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="flex my-10 p-8 border rounded-lg">
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
          <div className="space-y-2">
            <button
              className="btn btn-accent btn-wide"
              onClick={() => toggleWatched(movie.id)}
            >
              {movie.watched ? (
                "Unwatch"
              ) : (
                <a href={fixUrl(movie.url)} target="_blank">
                  Watch
                </a>
              )}
            </button>
            <button
              className="btn btn-secondary btn-wide"
              onClick={() => deleteMovie(movie.id)}
            >
              Remove
            </button>
          </div>
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
    url: PropTypes.string.isRequired,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieItem;
