import axios from 'axios'
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  
} from '../constants/userConstants'





const localStorage = window.localStorage
const API = 'https://api.courses.matricula.co.in'
// const API = 'http://localhost:5000'


// console.log('====================================');
// console.log(API);
// console.log('====================================');


// signIn user
export const signInUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST
    })

    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    const { data } = await axios.post(`${API}/public/auth/login`, body, config)
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
export const signUpUser = (username,email, password,mobile) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST
    })

    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      username,
      email,
      password,
      mobile
    }
    const { data } = await axios.post(`${API}/public/auth/signup`, body, config)
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}


// user logout
export const logoutUser = () => (dispatch) => {
  if (localStorage.getItem('userInfo')) {
    localStorage.removeItem('userInfo')
  }
  dispatch({
    type: USER_LOGOUT
  })
}