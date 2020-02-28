import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
      <Link to="/">
        Cinemapp
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/movies-create">MoviesCreate</Link>
    </nav>
  );
}

export default Navbar;