import axios from "axios";
import { constants } from "../utils/constants";

const axiosClient = axios.create({
  baseURL: constants.SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const dataLocalStorage = JSON.parse(localStorage.getItem("persist:user"));
    config.headers["Authorization"] = `Bearer ${dataLocalStorage.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
