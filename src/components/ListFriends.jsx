import React, { memo } from "react";
import { ProfileCard, Wrapper } from "../components";

const ListFriends = ({ friends = [] }) => {
  return (
    <Wrapper className="flex flex-col gap-2 rounded-md bg-white overflow-y-auto max-h-[320px] p-5">
      {friends.length > 0 &&
        friends.map((item) => {
          return (
            <ProfileCard
              key={item._id}
              className="shadow-none p-1"
              userInfo={item}
            />
          );
        })}
    </Wrapper>
  );
};

export default memo(ListFriends);
