import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, LANG_OPTIONS } from "../utils/constants";
import { toggleSearchView } from "../utils/searchSlice";
import { onLanguageChange } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggleSearch = useSelector((store) => store.search?.onSearchChange);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLangugaeChange=(e)=>{
   dispatch(onLanguageChange(e.target.value))
  }

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-linear-to-b from-black/80 to-transparent px-8 py-2 flex justify-between">
      <img className="w-60" src={NETFLIX_LOGO} alt="logo" />
      <div className="flex ">
        {toggleSearch && (
          <select
            className=" px-4 py-1.5
          text-white text-2xl bg-transparent
          rounded-md
          focus:outline-none" onChange={handleLangugaeChange}
          >
            {LANG_OPTIONS.map((lang) => (
              <option
                key={lang.identifier}
                className="text-black "
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button className="p-4 text-white text-2xl" onClick={handleSearchClick}>
          {" "}
          {toggleSearch ? "Home" : "Search"}
        </button>
        {user && (
          <button onClick={handleSignOut} className=" text-white text-2xl">
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
