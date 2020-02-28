//the things that are static are what you put in the app.js
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/movies";
import MoviesCreate from "./pages/movies-create"

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies-create" component={MoviesCreate} />
    </Router>
    
  );
}

export default App;
