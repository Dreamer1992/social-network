import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 1, message: 'It\'s my first post', like: 17}
  ],
  newPostText: 'it-kamasutra',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.newPostText,
        like: 0
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        return dispatch(setUserStatus(status))
      }
    })
}


export default profileReducer;