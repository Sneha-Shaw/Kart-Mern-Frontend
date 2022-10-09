import { combineReducers } from 'redux'
import {
    getAllProductReducer,
    getSingleProductReducer,
    addToWishlistReducer,
    getWishlistReducer,
    checkIfWishlistReducer
} from './productReducer'
import { userSigninReducer,userSignupReducer } from './userReducer'


const rootReducer = combineReducers({
    userSignup: userSignupReducer,
    userSignin:userSigninReducer,
    getAllProduct: getAllProductReducer,
    getSingleProduct: getSingleProductReducer,
    addToWishlist: addToWishlistReducer,
    getWishlist: getWishlistReducer,
    checkIfWishlist: checkIfWishlistReducer
})

export default rootReducer
