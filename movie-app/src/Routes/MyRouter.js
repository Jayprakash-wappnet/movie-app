import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import PageNotFound from "../pages/PageNotFound";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:imdbID" element={<MovieDetails />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MyRouter;
