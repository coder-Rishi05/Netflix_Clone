import React, { useState } from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";
import { MdArrowDropDown } from "react-icons/md";

const Login = () => {
  const [toggleState, setToggleState] = useState(true);

  const [active, setActive] = useState(true);

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  const handleSetActive = () => {
    setActive((active) => (active = false));
  };

  return (
    <div>
      <Header />
      <div className="relative w-full ">
        <img
          className="z-1 w-full h-full object-center object-cover "
          src={img_data}
          alt="bg_image"
        />
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
                className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4  dark:focus:ring-blue-600  text-gray-600  "
                type="checkbox"
              />{" "}
              Remember me
            </p>
            <p className="text-white text-md  mt-4 ml-17">
              New to Netflix?
              <span
                onClick={() => handleToggleState()}
                className="font-bold hover:cursor-pointer hover:underline"
              >
                Sign up now.
              </span>
            </p>
            <p className="text-sm text-gray-500 px-17 my-4 ">
              This page is protected by Google reCAPTCHA to ensure <br /> you're
              not a bot.
            </p>
            <div className={`${active ? "" : "max-w-[350px] mx-auto"}`}>
              <p
                onClick={() => handleSetActive()}
                className={`${
                  active
                    ? "text-blue-400 text-sm underline ml-17 hover:cursor-pointer "
                    : "text-neutral-400 font-normal  text-[13px] tracking-tighter  "
                }`}
              >
                {active
                  ? "Learn more"
                  : `The information collected by Google reCAPTCHA is subject to the Google {}  and {} , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google.`}
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-[#161616] p-8 md:p-20 md:pl-[10rem]">
        <p className="text-gray-300 mb-8">
          Questions? Call 000-800-919-1743 (Toll-Free)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8 max-w-4xl">
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            faq
          </li>
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            Help Center
          </li>
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            Term of use
          </li>
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            Privacy
          </li>
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            Cookies Preference
          </li>
          <li className="underline list-none hover:cursor-pointer uppercase text-sm font-semibold text-gray-300/80">
            Corporate Information
          </li>
        </div>
        <div className="mt-8">
          <div className="inline-flex items-center border hover:ring-1 ring-purple-500 border-gray-500 px-3 py-2 rounded text-gray-300 bg-transparent">
            <MdArrowDropDown className="mr-1 text-lg" />
            <select name="" id="">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
