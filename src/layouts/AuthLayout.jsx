import React from "react";
import logo from "../assets/logo.jpg";

const AuthLayout = ({ title = "", children }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-purple-500 min-h-screen flex justify-center items-center">
      <div className="w-[340px] bg-opacity rounded-3xl px-5 pt-5 pb-10 border-2 border-white">
        <div className="">
          <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-md mx-auto">
            <img className="w-10 h-10 rounded-lg" src={logo} alt="logo" />
          </div>
          <div className="text-center my-2 text-[20px] font-extrabold">
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
