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
    deleteCartProductReducer,
    searchProductReducer
} from './productReducer'
import { userSigninReducer, userSignupReducer, getSingleUserReducer } from './userReducer'
import {
    createOrderReducer,
    getAllOrderReducer,
    cancelOrderReducer,
    searchProductsInOrderReducer
} from './orderReducer'


const rootReducer = combineReducers({
    signUpUser: userSignupReducer,
    signInUser: userSigninReducer,
    getSingleUser: getSingleUserReducer,
    getAllProducts: getAllProductsReducer,
    getSingleProduct: getSingleProductReducer,
    addToWishlist: addToWishlistReducer,
    getWishlist: getWishlistReducer,
    checkIfWishlist: checkIfWishlistReducer,
    deleteFromWishlist: deleteFromWishlistReducer,
    addToCart: addToCartReducer,
    getCart: getCartReducer,
    deleteProductFromCart: deleteCartProductReducer,
    createOrder: createOrderReducer,
    getAllOrder: getAllOrderReducer,
    cancelOrder: cancelOrderReducer,
    searchProduct:searchProductReducer,
    searchProductsInOrder:searchProductsInOrderReducer
})

export default rootReducer
