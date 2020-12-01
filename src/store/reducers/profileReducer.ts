import {profileAPI, userAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../../types/types";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'It\'s my first post', like: 17}
  ] as Array<PostType>,
  newPostText: '',
  profile: null as ProfileType | null,
  status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, status: action.status}
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    default:
      return state;
  }
}

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
  type: ADD_POST,
  newPostText
})
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await userAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateUserStatus(status);

  if (response.data.resultCode === 0) {
    return dispatch(setUserStatus(status));
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;
