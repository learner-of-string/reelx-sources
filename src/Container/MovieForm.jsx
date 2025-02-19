import { useState } from "react";
import PropTypes from "prop-types";

const MovieForm = ({ addMovie }) => {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    // console.log(key, value);

    setMovieData({ ...movieData, [key]: value });
  };

  //   addMovie(movieData); //moved to line:23

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(movieData);
    addMovie(movieData);
    setMovieData({ ...movieData, title: "", ott: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter movie name"
          name="title"
          value={movieData?.title}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <select name="ott" className="select" onChange={handleChange}>
          <option value="">Select an OTT</option>
          <option value="netflix">NetFlix</option>
          <option value="hoichoi">Hoichoi</option>
          <option value="youtube">YouTube😒</option>
          <option value="hotstar">Hotstar</option>
          <option value="toffie">Toffie</option>
          <option value="kukutv">KuKuTV</option>
          <option value="others">Others</option>
        </select>
        <button className="btn btn-outline btn-primary">Add</button>
      </form>
    </div>
  );
};

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default MovieForm;
