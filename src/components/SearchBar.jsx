import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageOptions";
import { useRef } from "react";
import ai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { movieSearchList } from "../utils/searchSlice";

const SearchBar = () => {
  const language = useSelector((store) => store.language.changeLanguage);

  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleSearchSubmit = async () => {
    const searchAs =
      "Based on the following input: " +
      searchText.current.value +
      ". Return ONLY the names of TOP 5 INDIAN MOVIES, comma-separated. " +
      "Exclude adult, erotic, sexual, explicit, or 18+ movies. " +
      "Movies must be family-friendly or mainstream cinema only. " +
      "No explanations, no extra text.";

    const fetchMoviesTMDB = async (movieName) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + movieName+"&include_adult=false",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

    const movieList = async () => {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: searchAs,
      });

      return response.text;
    };

    const movies = await movieList();
    const movieAIList = movies.split(", ");

    const movieData = movieAIList.map((movie) => fetchMoviesTMDB(movie));
    const tmdbResults = (await Promise.all(movieData)).flat();

    dispatch(
      movieSearchList({
        movieName: movieAIList,
        tmdbResults: { movies: tmdbResults },
      })
    );
  };

  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full flex justify-center px-6 ">
      <form
        className=" w-1/2 grid grid-cols-12 gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          text="Search"
          placeholder={lang[language].onSearchText}
          className="flex-1 px-4 py-3 col-span-10 bg-white text-black rounded-lg"
        ></input>
        <button
          className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg col-span-2"
          onClick={handleSearchSubmit}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
