import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "api-key": "ccb895d9-671f-407b-bfa7-d48c01d201f2"
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  authUser() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  }
}