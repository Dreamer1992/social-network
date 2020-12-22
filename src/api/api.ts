import axios from "axios"
import {ProfileType} from "../types/types"

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

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },

  getUserProfile(userId: number) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getUserProfile(userId);
  }
}

export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      })
  },

  getUserStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateUserStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },

  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`profile/photo`, formData);
  },

  saveProfile(profile: ProfileType) {
    return instance.put(`/profile`, profile);
  }
}

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  message: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`)
      .then(response => {
        return response.data;
      });
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha});
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
