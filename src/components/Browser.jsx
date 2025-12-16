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
      <div className="relative">
        <MovieContainer />   {/* hero */}
        <SecondaryContainer />  {/* rows */}
        <div
            className="
              pointer-events-none
              absolute inset-x-0 top-0 h-40
              bg-linear-to-b from-black via-black/100 to-transparent
            "/>
      </div>

    )}
  </div>
);

};

export default Browser;
