import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClickBtn = () => {
    const message = checkValidateData(
      firstName.current?.value,
      lastName.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    ); // useRef  variable is a object with  current value
    if (message) return;
    else {
      if (!isSignInForm) {
        // sign up logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            console.log(user);
            console.log("hello");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(errorCode + errorMessage);
          });
      }
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          if (user) {
            setErrorMessage(null);
          }
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute z-30 bg-gradient-to-b   from-black to-black  h-[55rem] w-full  opacity-40 "></div>
      <img
        className="h-[55rem]  absolute  object-center object-cover w-full   "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/PK-en-20250526-TRIFECTA-perspective_f75eac57-ea92-4021-b89b-f59c05289113_medium.jpg"
        alt="background img"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 bg-black/80 mx-auto right-0 left-0 mt-26 z-100  "
      >
        <h1 className="text-4xl text-white my-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={firstName}
            type="text"
            placeholder=" First name"
            className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
          />
        )}

        {!isSignInForm && (
          <input
            ref={lastName}
            type="text"
            placeholder="Second name"
            className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address "
          className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className=" p-2 my-4 w-full rounded border border-white text-white"
        />

        <p className="font-bold text-red-700">{errorMessage}</p>
        <div>
          <button
            className="bg-red-700 py-2 my-2 w-full rounded-lg  text-white cursor-pointer"
            onClick={handleClickBtn}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p
          className="text-white my-2 cursor-pointer"
          onClick={() => {
            toggleIsSignInForm();
            setErrorMessage(null);
          }}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
