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
    const { userInfo } = useSelector(state => state.signInUser)
    const { product } = useSelector(state => state.getSingleProduct)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {

        dispatch(getSingleProduct(id))

    }, [dispatch, id])

    const [show, setShow] = useState()
    const [size, setSize] = useState("")

    useEffect(() => {
        setShow(product?.product?.featureimg[0])
    }, [product?.product?.featureimg])

    useEffect(() => {

        if (product?.product?._id !== undefined) {
            dispatch(checkIfWishlist(userInfo?._id, product?.product?._id))
        }

    }, [dispatch, product?.product?._id, userInfo?._id])

    const addToWishHandler = () => {
        if (userInfo) {
            if (isWishlist?.isPresent === false) {
                setTimeout(() => {

                    dispatch(addToWishlist(userInfo?._id, product?.product?._id))
                }, 1500);
                Swal.fire({

                    icon: 'success',
                    text: 'Added to wishlist',

                })
            }
            else {
                Swal.fire({
                    icon: 'info',
                    text: 'Already in wishlist!',
                })
            }
        } else {
            navigate('/login')
        }
    }

    // select size
    const selectSize = (e) => {
        setSize(e.target.value)
    }

    const addToCartHandler = () => {

        if (userInfo) {
            if (product) {
                dispatch(addToCart(userInfo?._id, product?.product?._id))
                Swal.fire({

                    icon: 'success',
                    text: 'Added to cart',

                })
                navigate('/cart')
            }

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
        isWishlist,
        selectSize,
        size
    }
}