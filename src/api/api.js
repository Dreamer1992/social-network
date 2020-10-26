import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'api-key': '5c0f0a90-5afa-4259-9e1c-ae6776e803f5'
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
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getUserProfile(userId);
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      })
  },

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateUserStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`profile/photo`, formData);
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  },

  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}