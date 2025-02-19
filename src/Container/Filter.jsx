import PropTypes from "prop-types";

const Filter = ({ setFilterType }) => {
  return (
    <div className="space-x-2 my-3">
      <button
        className="btn btn-outline btn-ghost"
        onClick={() => setFilterType("all")}
      >
        All
      </button>
      <button
        className="btn btn-outline btn-success"
        onClick={() => setFilterType("watched")}
      >
        Watched
      </button>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => setFilterType("unwatched")}
      >
        Unwatched
      </button>
    </div>
  );
};

Filter.propTypes = {
  setFilterType: PropTypes.func.isRequired,
};

export default Filter;
