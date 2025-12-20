import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import { setSelectedMovieId } from "../utils/movieSlice";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const handleMovieClick = (movieId) => {
    dispatch(setSelectedMovieId(null));
    setTimeout(() => {
      dispatch(setSelectedMovieId(movieId));
    }, 0);
  };

  return (
    <div className=" relative -mt-20 md:-mt-44  px-8 z-10">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
        onMovieClick={handleMovieClick}
      />
      <MovieList
        title="Popular"
        movies={movies.nowSecondMovieList}
        onMovieClick={handleMovieClick}
      />
      <MovieList
        title="Romantic"
        movies={movies.nowPlayingMovies}
        onMovieClick={handleMovieClick}
      />
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
        onMovieClick={handleMovieClick}
      />
    </div>
  );
};

export default SecondaryContainer;