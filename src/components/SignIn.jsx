import React from "react";
import Header from "./Header";
const SignIn = () => {
  return (
    <div className=" relative h-[55rem]  ">
      <Header />
      <div className=" absolute bg-gradient-to-b   from-black to-black  h-full w-full  opacity-40 "></div>
      <img
        className="h-[55rem] object-cover object-center "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/PK-en-20250526-TRIFECTA-perspective_f75eac57-ea92-4021-b89b-f59c05289113_medium.jpg"
        alt="background img"
      />
    </div>
  );
};

export default SignIn;
