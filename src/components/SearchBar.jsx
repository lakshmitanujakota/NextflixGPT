import {useSelector} from "react-redux";
import lang from "../utils/languageOptions";

const SearchBar = () => {

    const language=useSelector((store)=>store.language.changeLanguage)
  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full flex justify-center px-6 ">
      <form className=" w-1/2 grid grid-cols-12 gap-3">
        <input
          text="Search"
          placeHolder={lang[language].onSearchText}
          className="flex-1 px-4 py-3 col-span-10 bg-white text-black rounded-lg"
        ></input>
        <button className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg col-span-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
