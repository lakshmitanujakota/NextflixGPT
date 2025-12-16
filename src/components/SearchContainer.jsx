import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import MovieTrailer from "./MovieTrailer";
import useBackgroundMovieTrailer from "../hooks/useBackgroundMovieTrailer";

const SearchContainer = () => {
  const movies = useSelector((store) => store.search?.tmdbResults?.movies);
  const trailer = useSelector((store) => store.movies.selectedTrailer);

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useBackgroundMovieTrailer(selectedMovieId, "selected");

  // ✅ FILTER: only movies with poster + id
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
        onMovieClick={setSelectedMovieId}
      />
      {selectedMovieId && trailer && (
        <MovieTrailer
          trailerKey={trailer.key}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
};

export default SearchContainer;
