import MovieList from "./MovieList";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import MovieTrailer from "./MovieTrailer";
import { setSelectedMovieId } from "../utils/movieSlice";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.search?.tmdbResults?.movies);

  const filteredMovies = useMemo(() => {
    if (!movies) return [];
    return movies.filter(
      (movie) => movie.poster_path && movie.id && movie.adult === false
    );
  }, [movies]);

  if (!filteredMovies.length) return null;

  if (!movies) return null;

  return (
    <div className="relative z-20  px-6 pt-70">
      <MovieList
        title="Search Results"
        movies={filteredMovies}
        onMovieClick={(id) => dispatch(setSelectedMovieId(id))}
      />
    </div>
  );
};

export default SearchContainer;
