import { combineReducers } from 'redux'
import {
    getAllProductsReducer,
    getSingleProductReducer,
    addToWishlistReducer,
    getWishlistReducer,
    checkIfWishlistReducer,
    deleteFromWishlistReducer,
    addToCartReducer,
    getCartReducer,
    deleteCartProductReducer
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
    checkIfWishlist: checkIfWishlistReducer,
    deleteFromWishlist: deleteFromWishlistReducer,
    addToCart: addToCartReducer,
    getCart: getCartReducer,
    deleteProductFromCart: deleteCartProductReducer
})

export default rootReducer
