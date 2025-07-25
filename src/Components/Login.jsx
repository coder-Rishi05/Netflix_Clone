import React, { useState } from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";

const Login = () => {
  const [toggleState, setToggleState] = useState(true);

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img className="z-1" src={img_data} alt="bg_image" />

        <form
          className="absolute z-10 bg-black/80 rounded-md top-[50%] pb-10 left-1/2  -translate-x-1/2 -translate-y-1/2"
          action=""
        >
          <div className=" z-1 py-6 flex relative flex-col">
            <h2 className="font-bold mx-12 my-2 text-4xl 10 text-pink-50 ">
              {toggleState ? "Sign In" : "Sign Up"}
            </h2>

            <input
              className="py-4 px-5 my-[1rem] mx-[4rem] placeholder:caret-amber-50  bg-amber-50/5  border-1 border-amber-50 rounded placeholder:text-white placeholder:text-[16px] "
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              className="py-4 px-5 mb-[1rem] mx-[4rem]  bg-amber-50/5  border-1 border-amber-50 rounded placeholder:text-white placeholder:text-[16px] "
              type="password"
              placeholder="Password"
            />
            <button className="py-2 px-4 rounded my-2 cursor-pointer hover:bg-red-700  mx-[4rem] bg-red-600 text-white font-bold">
              {toggleState ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-md text-center text-gray-400">OR</p>
            <button className="py-2 px-4 rounded my-2 cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#2D2828]/90  mx-[4rem] bg-[#2D2828] text-white font-bold">
              Use a sign-in code
            </button>
            <a
              className="text-center text-white underline my-3 hover:text-zinc-400 "
              href="#"
            >
              Forgot password
            </a>
            <p className="text-white text-md flex items-center gap-3 ml-17">
             
              <input
                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4  dark:focus:ring-blue-600  text-gray-600 bg-white "
                type="checkbox"
              />{" "}
              Remember me
            </p>
            <p className="text-white text-md  mt-4 ml-17">
              New to Netflix?
              <span
                onClick={ () => handleToggleState()}
                className="font-bold hover:cursor-pointer hover:underline"
              >
                Sign up now.
              </span>
            </p>
            <p className="text-sm text-gray-500 px-17 my-4 ">
              This page is protected by Google reCAPTCHA to ensure <br /> you're
              not a bot.
            </p>
            <a
              className="text-blue-600 underline ml-17 hover:text-blue-950"
              href="#"
            >
              Learn More
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
