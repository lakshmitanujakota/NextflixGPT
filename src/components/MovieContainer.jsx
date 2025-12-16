import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";
import { useSelector } from "react-redux";

const MovieContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

 const{original_title,overview, id}=mainMovie;
  return (
    <div>
      <VedioTitle title={original_title} overview={overview} movieId ={id} />
      <VedioBackground/>
    </div>
  );
};

export default MovieContainer;
