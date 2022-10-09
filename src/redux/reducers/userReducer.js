import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
} from '../constants/userConstants'


export const userSignupReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }
      default:
        return state
    }}



///    SIGNIN REDUCER    ///
export const userSigninReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case USER_LOGOUT:
      return {
        userInfo: null
      }
    default:
      return state
  }
}