import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
import { BG_NETFLIX_IMG } from "../utils/constants";

const SearchPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-screen object-cover brightness-60"
          src={BG_NETFLIX_IMG}
          alt="logo"
        />
      </div>
      <SearchBar />
      <SearchContainer />
    </div>
  );
};

export default SearchPage;
