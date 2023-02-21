import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Avatar, Wrapper } from "../components";

const ProfileCard = ({ className = "", userInfo = {} }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <Link to={`/profile/${userInfo?._id}`}>
        <Avatar src={userInfo?.avatar} />
      </Link>
      <div className="flex flex-col">
        <Link to={`/profile/${userInfo?._id}`}>
          <p className="text-cyan-700 font-semibold hover:text-cyan-600 cursor-pointer">
            {userInfo?.username}
          </p>
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>{userInfo?.followers?.length} follower</span>
          <span>{userInfo?.friends?.length} friends</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileCard);
