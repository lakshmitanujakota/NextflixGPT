import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addSecondMovieList} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


export const useSecondMovieList=()=>{
   
   const dispatch=useDispatch();

   const getSecondMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json);
    dispatch(addSecondMovieList(json.results))
  };

  useEffect(() => {
    getSecondMovieList();
  }, []);


}

