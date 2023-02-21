import { Outlet } from "react-router-dom";
import Header from "./Header";

const ProfileLayout = () => {
  return (
    <div className="w-full bg-slate-100">
      <Header />
      <div className="pt-[90px] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
