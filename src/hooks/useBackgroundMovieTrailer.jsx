import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer, setSelectedTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useBackgroundMovieTrailer = (type = "background") => {
  const dispatch = useDispatch();

  const movieId = useSelector((store) =>
    type === "background"
      ? store.movies.backgroundMovieId
      : store.movies.selectedMovieId
  );

  useEffect(() => {
    const getMovieVedios = async () => {
      if (!movieId) return;

      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      const trailer  = json.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        ) ||
        json.results.find((v) => v.site === "YouTube");

     /* const trailerVedio = resultVedio.length
        ? resultVedio[0]
        : json.results[0];
        */

      if (type == "background") {
        dispatch(addMovieTrailer(trailer));
      } else {
        dispatch(setSelectedTrailer(trailer));
      }
    };

    getMovieVedios();
  }, [movieId, dispatch, type]);
};

export default useBackgroundMovieTrailer;