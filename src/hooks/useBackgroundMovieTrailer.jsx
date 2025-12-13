import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useBackgroundMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVedios = async () => {

     if (!movieId) return;
     
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const resultVedio = json.results.filter(
      (vedio) => vedio.type === "Trailer"
    );
    const trailerVedio = resultVedio.length ? resultVedio[0] : json.results[0];
    dispatch(addMovieTrailer(trailerVedio));
  };

  useEffect(() => {
    getMovieVedios();
  }, []);
};

export default useBackgroundMovieTrailer;
