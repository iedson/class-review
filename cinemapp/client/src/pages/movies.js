import React, { useState, useEffect } from "react";
import API from './../api';

function Movies() {
  /* empty array to hold my movie objects */
  
  const [movies, setMovies] = useState([])
  /* on render loadMovies which populates my state with objects from the db */
  useEffect(() => {
    loadMovies()
  }, [])

  /* load all movies */
  function loadMovies() {
    API.getAllMovies()
      .then(res =>
        setMovies(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      movies list
      map Movies
      {
        movies.map(
            movie => {
              return (<div key={movie._id}>{movie.title}</div>);
            }
        )
      }
    </div>
  );
}

export default Movies;