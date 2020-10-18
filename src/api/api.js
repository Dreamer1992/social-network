import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'api-key': '6ec1fc2c-45a8-4013-b845-3ceb1a007cda'
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
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  }
}