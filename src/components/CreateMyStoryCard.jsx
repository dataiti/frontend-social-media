import React from "react";
import { icons } from "../utils/icons";
import { Avatar } from "../components";
import { useSelector } from "react-redux";
import { authSelect } from "../redux/features/authSlice";

const CreateMyStoryCard = () => {
  const { userInfo } = useSelector(authSelect);

  return (
    <div className="flex flex-col">
      <img
        className="rounded-tr-lg rounded-tl-lg  h-3/4 w-full object-contain block bg-white"
        src={userInfo?.avatar}
        alt="avatar"
      />
      <div className="flex items-center justify-center bg-gray-500 flex-auto rounded-br-lg rounded-bl-lg text-white">
        <icons.BsPlusCircleFill size={24} />
      </div>
    </div>
  );
};

export default CreateMyStoryCard;
