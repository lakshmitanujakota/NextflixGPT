import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-6 bg-black">
      <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
       <div  className="
          flex gap-4
          overflow-x-auto overflow-y-hidden 
          scrollbar-hide
          scroll-smooth
        ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
    </div>
  );
};

export default MovieList;
