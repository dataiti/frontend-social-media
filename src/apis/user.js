import axiosClient from "../configs/configAxios";

const getListFriendsApi = async (userId) => {
  const res = await axiosClient.get(`/user/list-friends/${userId}`);
  if (res) {
    return res;
  }
};

const getListFollowersApi = async (userId) => {
  const res = await axiosClient.get(`/user/list-followers/${userId}`);
  if (res) {
    return res;
  }
};

const acceptFriendApi = async (userId, followerId) => {
  const res = await axiosClient.get(
    `/user/accept-friend/${userId}/${followerId}`
  );
  if (res) {
    return res;
  }
};

const getAllByUserApi = async (limit = 6) => {
  const res = await axiosClient.get(`/user/all-users?limit=${limit}`);
  if (res) {
    return res;
  }
};

const getProfileApi = async (userId, profileId) => {
  const res = await axiosClient.get(`/user/profile/${userId}/${profileId}`);
  if (res) {
    return res;
  }
};

const updateAvatarApi = async (userId, formData) => {
  console.log(formData, userId);
  const res = await axiosClient.post(
    `/user/update-avatar/${userId}`,
    { formData },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (res) {
    return res;
  }
};

export {
  getListFriendsApi,
  getListFollowersApi,
  acceptFriendApi,
  getAllByUserApi,
  getProfileApi,
  updateAvatarApi,
};
