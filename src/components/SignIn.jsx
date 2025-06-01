import React, { useState } from "react";
import Header from "./Header";
const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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

      <form className="absolute w-4/12 p-12 bg-black/80 mx-auto right-0 left-0 mt-26 z-100  ">
        <h1 className="text-4xl text-white my-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
          />
        )}

        <input
          type="text"
          placeholder="Email Address "
          className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
        />
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Phone Number"
            className=" bg-black w-full rounded text-white border p-2 my-4 border-white"
          />
        )}
        <input
          type="text"
          placeholder="Password"
          className=" p-2 my-4 w-full rounded border border-white text-white"
        />
        <div>
          <button className="bg-red-700 py-2 my-2 w-full rounded-lg  text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p className="text-white my-2" onClick={toggleIsSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
