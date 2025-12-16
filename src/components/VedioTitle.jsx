import { useState } from "react";
import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";
import useBackgroundMovieTrailer from "../hooks/useBackgroundMovieTrailer";

const VedioTitle = ({ title, overview, movieId }) => {
  const [onClickMoreInfo, setOnClickMoreInfo] = useState(false);

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const trailer = useSelector((store) => store.movies.selectedTrailer);

  const handlePlay = () => {
    setSelectedMovieId(movieId);
  };

  // Fetch trailer whenever movieId changes
  useBackgroundMovieTrailer(selectedMovieId, "selected");

  const handleClickMoreInfo = () => {
    setOnClickMoreInfo(!onClickMoreInfo);
  };

  return (
    <div className="absolute aspect-vedio pt-110 left-8 w-[40%]  z-20 px-4 bg-radient-to-r from-black">
      <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-2xl mb-4 text-gray-200">
        {title}
      </h1>
      {onClickMoreInfo && (
        <h1
          className="text-base md:text-lg drop-shadow-md mb-6 line-clamp-4 text-gray-200"
          onClick={handleClickMoreInfo}
        >
          {overview}
        </h1>
      )}
      <div className="flex gap-4">
        <button
          className="bg-black text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-opacity-80 transition"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="bg-black text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-opacity-80 transition"
          onClick={handleClickMoreInfo}
        >
          {onClickMoreInfo ?" Hide Info" : "More Info"}
        </button>
      </div>
      {selectedMovieId && trailer && (
        <MovieTrailer
          trailerKey={trailer?.key}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
};

export default VedioTitle;
