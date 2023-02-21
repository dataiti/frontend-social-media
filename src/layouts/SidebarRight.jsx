import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListFriends, ListFriendsRequest } from "../components";
import {
  usersSelect,
  getListFriendsAction,
  getListFollowersAction,
} from "../redux/features/userSlice";
import { authSelect } from "../redux/features/authSlice";

const SidebarRight = () => {
  const dispatch = useDispatch();
  const { friends, followers } = useSelector(usersSelect);
  const { userInfo } = useSelector(authSelect);

  useEffect(() => {
    dispatch(getListFriendsAction(userInfo?._id));
    dispatch(getListFollowersAction(userInfo?._id));
  }, [userInfo]);

  return (
    <div className="flex flex-col gap-3">
      {followers?.length > 0 && (
        <Fragment>
          <span className="text-xs text-gray-500 font-extrabold">REQUEST</span>
          <ListFriendsRequest followers={followers} />
        </Fragment>
      )}
      {friends?.length > 0 && (
        <>
          <span className="text-xs text-gray-500 font-extrabold">FRIENDS</span>
          <ListFriends friends={friends} />
        </>
      )}
    </div>
  );
};

export default SidebarRight;
