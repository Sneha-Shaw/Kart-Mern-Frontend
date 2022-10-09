import axios from 'axios'
import { config } from 'npm'
import {

    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAILED,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAILED,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILED,
    GET_WISHLIST_REQUEST,
    GET_WISHLIST_SUCCESS,
    GET_WISHLIST_FAILED,
    CHECK_IF_WISHLIST_REQUEST,
    CHECK_IF_WISHLIST_SUCCESS,
    CHECK_IF_WISHLIST_FAILED
} from '../constants/productConstants'

const API = 'https://api.courses.matricula.co.in'
// const API = 'http://localhost:5000'


// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ 
            type: GET_ALL_PRODUCT_REQUEST 
        })
        config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/products/all`, config)
        dispatch({ 
            type: GET_ALL_PRODUCT_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({ 
            type: GET_ALL_PRODUCT_FAILED, payload: error.message 
        })
    }
}

// get single product
export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({ 
            type: GET_SINGLE_PRODUCT_REQUEST 
        })
        config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/products/get-single-product/${id}`, config)
        dispatch({ 
            type: GET_SINGLE_PRODUCT_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({ 
            type: GET_SINGLE_PRODUCT_FAILED, payload: error.message 
        })
    }
}

// add to wishlist
export const addToWishlist = (userId,productId) => async (dispatch) => {
    try {
        dispatch({ 
            type: ADD_TO_WISHLIST_REQUEST 
        })
        config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${API}/private/products/add-product-to-wishlist/${userId}/${productId}`, config)
        dispatch({ 
            type: ADD_TO_WISHLIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({ 
            type: ADD_TO_WISHLIST_FAILED, payload: error.message 
        })
    }
}

// get wishlist
export const getWishlist = (userId) => async (dispatch) => {
    try {
        dispatch({ 
            type: GET_WISHLIST_REQUEST 
        })
        config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/products/wishlist-products/${userId}`, config)
        dispatch({ 
            type: GET_WISHLIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({ 
            type: GET_WISHLIST_FAILED, payload: error.message 
        })
    }
}

// check if wishlist
export const checkIfWishlist = (userId,productId) => async (dispatch) => {
    try {
        dispatch({ 
            type: CHECK_IF_WISHLIST_REQUEST 
        })
        config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/products/check-product-in-wishlist/${userId}/${productId}`, config)
        dispatch({ 
            type: CHECK_IF_WISHLIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({ 
            type: CHECK_IF_WISHLIST_FAILED, payload: error.message 
        })
    }
}
