import Header from "./Header";
import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useSecondMovieList } from "../hooks/useSecondMovieList";
import SecondaryContainer from "./SecondaryContainer";
import SearchPage from "./SearchPage";

const Browser = () => {
  const gptSearch = useSelector((store) => store.search.onSearchChange);

  useNowPlayingMovies();
  useSecondMovieList();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      {gptSearch ? (
        <SearchPage />
      ) : (
        <>
          <MovieContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
