import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CreateMyPostCard,
  Loading,
  Wrapper,
} from "../components";
import { useParams } from "react-router-dom";
import { getProfileApi, updateAvatarApi } from "../apis/user";
import { useDispatch, useSelector } from "react-redux";
import { authSelect } from "../redux/features/authSlice";
import { icons } from "../utils/icons";
import axiosClient from "../configs/configAxios";

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { userInfo } = useSelector(authSelect);

  const [selectedFile, setSelectedFile] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const res = await getProfileApi(userInfo._id, params.id);
        setLoading(false);
        if (res && res.data) {
          setProfileData(res.data);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    fetchApi();
  }, [params.id]);

  useEffect(() => {
    if (params.id === userInfo._id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [userInfo.id, params.id]);

  const handleUpdateAvatar = async (e) => {
    setSelectedFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axiosClient({
        method: "post",
        url: "/update-avatar/63f25982047aa4abf6536429",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-5">
          <div className="w-[86%] mx-auto">
            <div className="grid grid-cols-6 gap-16">
              <div className="col-span-2 bg-white shadow-md rounded-md"></div>
              <div className="col-span-4 flex flex-col gap-3">
                <Wrapper className="">
                  <div className="h-full">
                    {profileData?.cover ? (
                      <img
                        className=" w-[300px] object-cover rounded-lg"
                        src={profileData?.cover}
                        alt="cover"
                      />
                    ) : (
                      <div className="h-[300px] w-full rounded-lg bg-slate-200"></div>
                    )}
                    <div className="flex justify-between items-center pt-5">
                      <div className="relative flex items-center gap-5">
                        <div className="flex ">
                          <Avatar
                            className="h-[100px] w-[100px] border-4 rounded-full"
                            src={profileData?.avatar}
                          />
                          {isOwner && (
                            <label
                              className="absolute bottom-0 left-14 px-1 bg-gray-300 text-gray-500 rounded cursor-pointer"
                              htmlFor="avatar"
                              onChange={handleUpdateAvatar}
                            >
                              <icons.BsFillCameraFill size={28} />
                              <input type="file" id="avatar" hidden />
                            </label>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <p className="text-black text-[26px] font-[600] font-semibol cursor-pointer">
                            {profileData?.username}
                          </p>
                          <div className="flex items-center gap-2 text-lg text-gray-500">
                            <span>
                              {profileData?.followers?.length} follower
                            </span>
                            <span>{profileData?.friends?.length} friends</span>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        {isOwner ? (
                          <div className="flex justify-center items-center">
                            <Button
                              className="bg-gray-200 text-md font-bold"
                              leftIcon={<icons.MdEditNote size={20} />}
                            >
                              edit profile
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            {profileData?.isFriend && (
                              <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center">
                                  <Button
                                    primary
                                    className="text-md font-bold"
                                    leftIcon={<icons.FaUserCheck size={20} />}
                                  >
                                    friends
                                  </Button>
                                </div>
                                <div className="flex justify-center items-center">
                                  <Button
                                    outline
                                    className="text-md font-bold"
                                    leftIcon={<icons.FaUserTimes size={20} />}
                                  >
                                    cancel friend
                                  </Button>
                                </div>
                              </div>
                            )}

                            {!profileData?.isFriend && (
                              <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center">
                                  <Button
                                    outline
                                    className="text-md font-bold"
                                    leftIcon={<icons.FaUserPlus size={20} />}
                                  >
                                    add friend
                                  </Button>
                                </div>
                                {profileData?.isFollwing ? (
                                  <div className="flex justify-center items-center">
                                    <Button
                                      outline
                                      className="text-md font-bold"
                                      leftIcon={<icons.FaUserTimes size={20} />}
                                    >
                                      following
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex justify-center items-center">
                                    <Button
                                      outline
                                      className="text-md font-bold"
                                      leftIcon={<icons.FaUserTimes size={20} />}
                                    >
                                      follow
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Wrapper>
                <CreateMyPostCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
