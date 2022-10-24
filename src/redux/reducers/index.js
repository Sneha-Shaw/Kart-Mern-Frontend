import { combineReducers } from 'redux'
import {
    getAllProductsReducer,
    getSingleProductReducer,
    addToWishlistReducer,
    getWishlistReducer,
    checkIfWishlistReducer
} from './productReducer'
import { userSigninReducer,userSignupReducer,getSingleUserReducer } from './userReducer'


const rootReducer = combineReducers({
    signUpUser: userSignupReducer,
    signInUser:userSigninReducer,
    getSingleUser:getSingleUserReducer,
    getAllProducts: getAllProductsReducer,
    getSingleProduct: getSingleProductReducer,
    addToWishlist: addToWishlistReducer,
    getWishlist: getWishlistReducer,
    checkIfWishlist: checkIfWishlistReducer
})

export default rootReducer
