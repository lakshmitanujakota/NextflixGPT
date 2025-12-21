import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addTopMovieList} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


export const useTopRated=()=>{
   
   const dispatch=useDispatch();

   const getTopMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopMovieList(json.results))
  };

  useEffect(() => {
    getTopMovieList();
  }, []);


}

