import React from "react";

const Avatar = ({
  src = "https://images.unsplash.com/photo-1676549936387-0b1b30288604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  alt = "",
  className = "",
}) => {
  return (
    <div className={`cursor-pointer h-10 w-10 ${className}`}>
      <img
        className="h-full w-full rounded-full object-cover border-2 border-green-500"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
