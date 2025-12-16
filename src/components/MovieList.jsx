import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, onMovieClick }) => {
  const rowRef = useRef(null);
  if (!movies || movies.length === 0) return null;

  const slideLeft = () => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const slideRight = () => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="px-6 pt-4 pb-8 relative ">
      {title && <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>}{" "}
      {/* Left arrow */}
      <button
        onClick={slideLeft}
        className="hidden md:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10
              text-white text-2xl font-bold rounded-full bg-black/10 hover:bg-black/30
              shadow-sm hover:shadow-md transition z-20"
      >
        {"<"}
      </button>
      {/* Right arrow */}
      <button
        onClick={slideRight}
        className="hidden md:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10
            text-white text-2xl font-bold rounded-full  bg-black/10 hover:bg-black/30
            shadow-sm hover:shadow-md transition z-20"
      >
        {">"}
      </button>
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            onClick={() => onMovieClick(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
