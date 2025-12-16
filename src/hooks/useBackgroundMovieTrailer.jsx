import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer, setSelectedTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useBackgroundMovieTrailer = (movieId, type="background") => {
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

    if (type == "background") {
      dispatch(addMovieTrailer(trailerVedio));
    } else {
      dispatch(setSelectedTrailer(trailerVedio));
    }
  };

  useEffect(() => {
    getMovieVedios();
  }, [movieId]);
};

export default useBackgroundMovieTrailer;
