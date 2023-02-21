import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Wrapper } from "../components";
import { authSelect } from "../redux/features/authSlice";
import { usersSelect, acceptFriendAction } from "../redux/features/userSlice";

const FriendRequestCard = ({ item = {} }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(authSelect);

  const {} = useSelector(usersSelect);

  const handleAcceptFriend = async () => {
    dispatch(
      acceptFriendAction({ userId: userInfo._id, followerId: item._id })
    );
  };

  return (
    <Wrapper className="w-full flex flex-col gap-2 py-2 px-0 shadow-none">
      <div className="w-full flex items-center gap-4">
        <Avatar src={item.avatar} />
        <div className="text-sm text-gray-400 font-normal">
          <span className="text-md font-extrabold text-cyan-500">
            {item.username}{" "}
          </span>
          wants to add you to friends
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          size="medium"
          primary
          className="flex-auto"
          onClick={handleAcceptFriend}
        >
          Accept
        </Button>
        <Button size="medium" outline className="flex-auto">
          Decline
        </Button>
      </div>
    </Wrapper>
  );
};

export default FriendRequestCard;
