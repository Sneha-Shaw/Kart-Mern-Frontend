import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct } from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    addToWishlist,
    checkIfWishlist,
    addToCart
} from '../../redux/actions/productAction';
import Swal from 'sweetalert2';

export const SingleProductLogic = () => {
    const { isWishlist } = useSelector(state => state.checkIfWishlist)
    const { data: cart } = useSelector(state => state.addToWishlist)
    const { userInfo } = useSelector(state => state.signInUser)
    const { product } = useSelector(state => state.getSingleProduct)
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch])
    const [show, setShow] = useState()
    useEffect(() => {
        setShow(product?.featureimg[0])
    }, [product?.featureimg])
    useEffect(() => {
        dispatch(checkIfWishlist(userInfo?._id, product?._id))
    }, [dispatch, product?._id, userInfo?._id])
    const addToWishHandler = () => {
        // if(isWishlist && isWishlist.isWishlist===false){

        if (userInfo) {
            if (isWishlist?.isWishlist === false) {
                dispatch(addToWishlist(userInfo?._id, product?._id))
                Swal.fire({

                    icon: 'success',
                    text: 'Added to wishlist',

                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already in wishlist!',
                })
            }
        } else {
            navigate('/login')
        }
        // }
    }
    console.log(cart && cart.success);

    const addToCartHandler = () => {

        if (userInfo) {
            dispatch(addToCart(userInfo?._id, product?._id))
            Swal.fire({

                icon: 'success',
                text: 'Added to cart',

            })
            navigate('/cart')
        } else {
            navigate('/login')
        }
    }

    return {
        product,
        show,
        setShow,
        addToWishHandler,
        addToCartHandler,
        isWishlist
    }
}