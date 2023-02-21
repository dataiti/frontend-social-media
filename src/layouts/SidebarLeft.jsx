import React from "react";
import { useSelector } from "react-redux";
import { MenuBar, ProfileCard, Wrapper } from "../components";
import { authSelect } from "../redux/features/authSlice";

const SidebarLeft = () => {
  const { userInfo } = useSelector(authSelect);

  return (
    <div className="flex flex-col gap-3">
      <Wrapper>
        <ProfileCard userInfo={userInfo} />
      </Wrapper>
      <MenuBar />
    </div>
  );
};

export default SidebarLeft;
