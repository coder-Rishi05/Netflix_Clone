import React, { useRef, useState } from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";
import { MdArrowDropDown } from "react-icons/md";
import { checkValidData } from "../Utils/validation";

const Login = () => {
  const [isSignIN, setIsSignIn] = useState(true);
  const [active, setActive] = useState(true);
  const [name, setName] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // checkValidData(email, password);
    console.log(email,password)
  };

  return (
    <div>
      <Header />

      {/* Background */}
      <div className="relative w-full h-screen">
        <img className="w-full h-full object-cover" src={img_data} alt="bg" />

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 w-[90%] sm:w-[80%] md:w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-black/80 p-6 sm:p-8 rounded-md"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {isSignIN ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIN && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded text-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded text-white"
          />

          <button
            onClick={handleButtonClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold"
          >
            {isSignIN ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center text-gray-400 my-4">OR</p>

          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded">
            Use a sign-in code
          </button>

          <p className="text-sm text-gray-400 mt-4 text-center underline cursor-pointer">
            Forgot password?
          </p>

          <div className="flex items-center gap-2 mt-4 text-white text-sm">
            <input type="checkbox" />
            Remember me
          </div>

          <p className="text-white text-sm mt-4">
            New to Netflix?{" "}
            <span
              onClick={() => setIsSignIn(!isSignIN)}
              className="font-bold cursor-pointer hover:underline"
            >
              Sign up now
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA.
          </p>

          <p
            onClick={() => setActive(!active)}
            className="text-blue-400 text-xs mt-2 cursor-pointer underline"
          >
            {active ? "Learn more" : "More info..."}
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-[#161616] px-6 sm:px-10 md:px-20 py-10">
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Questions? Call 000-800-919-1743
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300 text-sm">
          {[
            "FAQ",
            "Help Center",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
          ].map((item) => (
            <p key={item} className="underline cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center border border-gray-500 px-3 py-2 w-fit rounded text-gray-300">
            <MdArrowDropDown />
            <select className="bg-transparent outline-none ml-1">
              <option className="text-black">English</option>
              <option className="text-black">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
