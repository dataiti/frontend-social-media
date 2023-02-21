import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const MainLayout = () => {
  return (
    <div className="w-full bg-slate-100 ">
      <Header />
      <div className="w-[86%] h-screen mx-auto  grid grid-cols-4 gap-10 pt-[90px]">
        <SidebarLeft />
        <div className="flex-auto col-span-2">
          <Outlet />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default MainLayout;
