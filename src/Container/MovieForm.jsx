import { useState } from "react";
import PropTypes from "prop-types";

const MovieForm = ({ addMovie, onSearchMovie }) => {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
    url: "",
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    // console.log(key, value);
    onSearchMovie(value);

    setMovieData({ ...movieData, [key]: value });
  };

  //   addMovie(movieData); //moved to line:23

  const handleSubmit = (/* event */) => {
    // event.preventDefault();
    // I disabled this to refresh the page on submit the form cz the movieItem component is not showing after submit the form but after reload it come again as I stored them into the local storage of browser. I know it is not the proper way to solve this problem and I did a very bad practice. If anyone(obviously beginner in react) want to solve it, you can do cz it's open source.
    // console.log(movieData);
    addMovie(movieData);
    setMovieData({ ...movieData, title: "", ott: "", url: "" });
  };

  const handleMovieTitle = (event) => {
    handleChange(event);
    onSearchMovie(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col lg:flex-row">
        <input
          type="text"
          placeholder="Enter movie name"
          name="title"
          value={movieData?.title}
          onChange={handleMovieTitle}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <select name="ott" className="select" onChange={handleChange} required>
          <option value="default">Select an OTT</option>
          <option value="netflix">NetFlix</option>
          <option value="hoichoi">Hoichoi</option>
          <option value="youtube">YouTube😒</option>
          <option value="hotstar">Hotstar</option>
          <option value="toffee">Toffee</option>
          <option value="kukutv">KuKuTV</option>
          <option value="others">Others</option>
        </select>
        <input
          type="text"
          placeholder="Enter movie URL"
          name="url"
          value={movieData?.url}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button className="btn btn-outline btn-primary">Add</button>
      </form>
    </div>
  );
};

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
  onSearchMovie: PropTypes.func.isRequired,
  searchMovie: PropTypes.string.isRequired,
};

export default MovieForm;
