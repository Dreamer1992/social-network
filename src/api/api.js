import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "api-key": "ccb895d9-671f-407b-bfa7-d48c01d201f2"
  }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {})
    .then(response => {
      return response.data;
    })
}

export const getUsersDelete = (userId) => {
  return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

export const getUserAdd = (userId) => {
  return instance.post(`follow/${userId}`, {}, {})
}