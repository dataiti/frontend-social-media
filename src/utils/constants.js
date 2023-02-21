import { icons } from "../utils/icons";

export const routesPath = {
  signUp: "/sign-up",
  signIn: "/sign-in",
  newsFeed: "/news-feed",
  photos: "/photos",
  peoples: "/peoples",
  settings: "/settings",
  profile: "/profile/:id",
};

export const menuItems = [
  {
    display: "News Feed",
    icon: <icons.MdFeed size={24} />,
    path: routesPath.newsFeed,
  },
  {
    display: "Peoples",
    icon: <icons.FaUsers size={24} />,
    path: routesPath.peoples,
  },
  {
    display: "Photos",
    icon: <icons.HiPhoto size={24} />,
    path: routesPath.photos,
  },
  {
    display: "Profile",
    icon: <icons.FaUserCircle size={24} />,
    path: routesPath.profile,
  },
  {
    display: "Settings",
    icon: <icons.AiFillSetting size={24} />,
    path: routesPath.settings,
  },
];

export const constants = {
  SERVER_BASE_URL: process.env.REACT_APP_SERVER_URL,
};
