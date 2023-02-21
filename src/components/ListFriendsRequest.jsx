import React from "react";
import { FriendRequestCard } from "../components";

const ListFriendsRequest = ({ followers = [] }) => {
  return (
    <div className="flex flex-col gap-2 rounded-md p-5 bg-white overflow-y-auto max-h-[240px] shadow-md">
      {followers.length > 0 &&
        followers.map((item) => {
          return <FriendRequestCard key={item._id} item={item} />;
        })}
    </div>
  );
};

export default ListFriendsRequest;
