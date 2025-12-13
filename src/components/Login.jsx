import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BG_NETFLIX_IMG} from "../utils/constants";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const dispatch=useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
                      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + -+errorMessage);
          
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover brightness-60"
          src={BG_NETFLIX_IMG}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md w-[350px] flex flex-col gap-4 text-white"
      >
        <h1 className="p-2 text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="Name"
            placeholder="Full Name"
            className="p-3 bg-[#333] rounded-md focus:bg-[#454545] outline-none"
          ></input>
        )}
        <input
          ref={email}
          type="Email"
          placeholder="Email Address"
          className="p-3 bg-[#333] rounded-md focus:bg-[#454545] outline-none"
        ></input>
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-3 bg-[#333] rounded-md focus:bg-[#454545] outline-none"
        ></input>
        <p className="p-3 text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-red-600 hover:bg-red-700 p-3 rounded-md font-semibold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-3 font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? Sign Up"
            : "Already registered? please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
