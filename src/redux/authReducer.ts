import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
})

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let {id, login, email} = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 1) {
      dispatch(getCaptchaUrl());
    }

    let message = response.data.messages.length > 0 ? response.data.messages['0'] : 'Some error';
    dispatch(stopSubmit('login', {_error: message}));
  }
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;
