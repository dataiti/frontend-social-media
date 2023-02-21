import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Wrapper } from "../components";
import { authSelect } from "../redux/features/authSlice";

const CreateMyPostCard = () => {
  const { userInfo } = useSelector(authSelect);

  return (
    <Wrapper>
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10" src={userInfo?.avatar} />
        <input
          className="outline-none bg-slate-100 py-2 px-6 w-full rounded-full text-gray-500 shadow-md hover:bg-slate-200 transition-all"
          type="text"
          placeholder="Dat, what are you thinking?"
        />
      </div>
    </Wrapper>
  );
};

export default CreateMyPostCard;
