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


const getAllProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    products: null
}
export const getAllProductReducer = (state = getAllProductState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_ALL_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getSingleProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    product: null
}
export const getSingleProductReducer = (state = getSingleProductState, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case GET_SINGLE_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const addToWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}
export const addToWishlistReducer = (state = addToWishlistState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADD_TO_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    wishlistProduct: null
}
export const getWishlistReducer = (state = getWishlistState, action) => {
    switch (action.type) {
        case GET_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlistProduct: action.payload
            }
        case GET_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const checkIfWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    isWishlist: null
}
export const checkIfWishlistReducer = (state = checkIfWishlistState, action) => {
    switch (action.type) {
        case CHECK_IF_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHECK_IF_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                isWishlist: action.payload
            }
        case CHECK_IF_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}