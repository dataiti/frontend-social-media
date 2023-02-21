import React, { memo } from "react";
import { Link } from "react-router-dom";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col p-5 rounded-lg bg shadow-md bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default memo(Wrapper);
