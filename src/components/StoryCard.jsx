import React from "react";
import { Avatar } from "../components";

const StoryCard = () => {
  return (
    <div className="relative w-full h-[200px] shadow-xl z-10">
      <div className="absolute top-2 left-2">
        <Avatar className="h-10 w-10 " />
      </div>
      <div className="h-full">
        <img
          className="rounded-md h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1676723933564-77379143d9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default StoryCard;
