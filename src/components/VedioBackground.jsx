import { useSelector } from "react-redux";
import useBackgroundMovieTrailer from "../hooks/useBackgroundMovieTrailer";

const VedioBackground = () => {

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const trailer = useSelector((store) => store.movies?.movieTrailer);
  const movieId = nowPlayingMovies?.[0]?.id;
   
  useBackgroundMovieTrailer(movieId, "background");

   if (!movieId) return;

  return (
    <div className="relative w-screen h-[75vh] md:h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=" +
          trailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;
