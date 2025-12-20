import Header from "./Header";
import MovieContainer from "./MovieContainer";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useSecondMovieList } from "../hooks/useSecondMovieList";
import SecondaryContainer from "./SecondaryContainer";
import SearchPage from "./SearchPage";
import { useDispatch, useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";
import { clearTrailerKey } from "../utils/movieSlice";
import useBackgroundMovieTrailer from "../hooks/useBackgroundMovieTrailer";

const Browser = () => {
  const gptSearch = useSelector((store) => store.search.onSearchChange);
  const trailer = useSelector((store) => store.movies.selectedTrailer);
  const dispatch = useDispatch();

  useBackgroundMovieTrailer("selected");
  useNowPlayingMovies();
  useSecondMovieList();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {gptSearch ? (
        <SearchPage />
      ) : (
        <div className="relative pt-16">
          <div className="absolute inset-x-0 top-16 h-40 bg-gradient-to-b from-black via-black/90 to-transparent z-0 pointer-events-none" />
          <MovieContainer />
          <SecondaryContainer />
        </div>
      )}

      {trailer && (
        <MovieTrailer
          trailerKey={trailer.key}
          onClose={() => dispatch(clearTrailerKey())}
        />
      )}
    </div>
  );
};

export default Browser;
