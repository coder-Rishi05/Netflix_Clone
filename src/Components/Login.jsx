import React from "react";
import Header from "./Header";
import { img_data } from "../Utils/imgSrc";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="">
        <img src={img_data} alt="bg_image" />
      </div>
    </div>
  );
};

export default Login;
