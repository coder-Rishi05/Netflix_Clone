import React from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img className="z-1" src={img_data} alt="bg_image" />

        <form
          className="absolute z-10 bg-black/80 rounded top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
          action=""
        >
          <div className=" z-1 px-4 py-6 flex relative flex-col">
            <h2 className="font-bold mx-12 my-2 text-4xl 10 text-pink-50 ">
              Sign In
            </h2>
            <input
              className="py-4 px-5 my-[1rem] mx-[4rem] placeholder:caret-amber-50  bg-amber-50/10  border-1 border-amber-50 rounded placeholder:text-white placeholder:text-[16px] "
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              className="py-4 px-5 my-[1rem] mx-[4rem]  bg-amber-50/10  border-1 border-amber-50 rounded placeholder:text-white placeholder:text-[16px] "
              type="password"
              placeholder="Password"
            />
            <button className="p-4 rounded my-2 cursor-pointer hover:bg-red-700  mx-[4rem] bg-red-600 text-white font-bold">
              Sign In
            </button>
            <p>OR</p>
            <button>Use a sign-in code</button>
            <a href="#">forgot password</a>
            <input type="checkbox" /> Remember me
            <p>New to Netflix ?</p>Sign up now.
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <a href="#">Learn More</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
