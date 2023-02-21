import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { icons } from "../utils/icons";
import { Button, Loading } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { routesPath } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, authSelect } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { clearMessage, messageSelect } from "../redux/features/messageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(authSelect);
  const { message } = useSelector(messageSelect);

  const [searchValue, setSeachValue] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleInputSearchValue = (e) => {};

  const handleLogout = () => {
    setloading(true);
    dispatch(logoutAction())
      .unwrap()
      .then(() => {
        setloading(false);
        if (isLoggedIn) {
          toast.success(`LogOut successfully`);
        } else {
          toast.warning("Incorrect password");
        }
        navigate(routesPath.signIn);
      })
      .catch(() => {
        setloading(false);
      });
  };

  return (
    <div className="w-full h-[70px] bg-white shadow-md fixed top-0 left-0 z-20">
      {loading && <Loading />}
      <div className="w-[86%] h-full flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="w-[60px] h-[60px] flex items-center justify-center gap-2 bg-slate-300 rounded-md"
          >
            <img className="w-10 h-10 rounded-md" src={logo} alt="logo" />
          </Link>
          <span className="text-blue-400 font-extrabold text-3xl">
            PLM media
          </span>
        </div>
        <div className="flex items-center justify-end flex-1 gap-10">
          <div className="w-1/3 flex items-center bg-slate-100 px-1 py-1 rounded-full shadow-md hover:bg-slate-200 transition-all">
            <input
              className="bg-transparent outline-none pl-5 text-md w-full text-gray-500"
              type="text"
              placeholder="Seach something..."
              value={searchValue}
              onChange={() => handleInputSearchValue()}
            />
            <button
              type="submit"
              className="bg-white p-2 rounded-full text-gray-600 shadow-sm"
            >
              <icons.FiSearch size={24} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Button size="medium" primary onClick={handleLogout}>
              LogOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
