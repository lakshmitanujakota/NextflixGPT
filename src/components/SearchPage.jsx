import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
import { BG_NETFLIX_IMG } from "../utils/constants";

const SearchPage = () => {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover brightness-60"
          src={BG_NETFLIX_IMG}
          alt="background"
        />
      </div>

      <div className="relative z-10">
        <SearchBar />
        <SearchContainer />
      </div>
    </div>
  );
};

export default SearchPage;
