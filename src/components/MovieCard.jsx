import { MOVIE_LOGO } from "../utils/constants";

const MovieCard = ({ poster_path, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px]
                    hover:scale-105 
                     cursor-pointer"
    >
      <img
        className="rounded-md shadow-lg w-full h-auto"
        alt="Movie.."
        src={MOVIE_LOGO + poster_path}
      />
    </button>
  );
};

export default MovieCard;
