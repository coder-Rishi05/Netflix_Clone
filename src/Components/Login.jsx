import React from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="scale-[1.12] object-cover  object-center relative top-6.5 right-[-10] overflow-x-hidden "
          src={img_data}
          alt="bg_image"
        />
      </div>
    </div>
  );
};

export default Login;
