import React from "react";
import { Wrapper } from "../components";
import { menuItems } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <Wrapper>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => {
          return (
            <li key={item.display}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-4 text-slate-800 font-extrabold bg-slate-200 shadow-md rounded-full py-2 px-4"
                    : "flex items-center gap-4 text-gray-400 font-extrabold  py-2 px-4"
                }
              >
                <span>{item.icon}</span> {item.display}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default MenuBar;
