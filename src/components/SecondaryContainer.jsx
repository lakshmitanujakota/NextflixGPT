import { useSelector } from "react-redux";
import { useState } from "react";
import MovieList from "./MovieList";
import MovieTrailer from "./MovieTrailer";
import useBackgroundMovieTrailer from "../hooks/useBackgroundMovieTrailer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
   const trailer = useSelector((store) => store.movies.selectedTrailer);

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Fetch trailer whenever movieId changes
  useBackgroundMovieTrailer(selectedMovieId, "selected");
  
  return (
    <div className=" relative -mt-20 md:-mt-46  px-8 z-20">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} onMovieClick={setSelectedMovieId}  />
      <MovieList title="Popular" movies={movies.nowSecondMovieList} onMovieClick={setSelectedMovieId} />
      <MovieList title="Romantic" movies={movies.nowPlayingMovies} onMovieClick={setSelectedMovieId} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} onMovieClick={setSelectedMovieId}  />

       {selectedMovieId && (
        <MovieTrailer
          trailerKey={trailer?.key}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
};

export default SecondaryContainer;
