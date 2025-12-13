import SearchBar from "./SearchBar";
import { BG_NETFLIX_IMG } from "../utils/constants";

const SearchPage = () => {
  return (
    <div>
      <div className="absoulte -z-10">
        <img
          className="w-full h-screen object-cover brightness-60"
          src={BG_NETFLIX_IMG}
          alt="logo"
        />
      </div>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
