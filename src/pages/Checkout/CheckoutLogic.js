import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getCart
} from '../../redux/actions/productAction';
import { createOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const CheckoutLogic = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartProduct } = useSelector(state => state.getCart)
    const { userInfo } = useSelector(state => state.signInUser)

    const [addressShow, setAddressShow] = useState(true)
    const [showPayment, setShowPayment] = useState(false)
    const [showReview, setShowReview] = useState(false)


    const name = "Sneha Shaw"
    const address = "Santoshpur, lalabagan"
    const city = "Kolkata"
    const pincode = "700066"
    const state = "West Bengal"
    const mobile = "9876543210"
    const landmark = "Near bus stand"

    const [quantity, setQuantity] = useState(1)
    const showAddress = `${address}, ${city}, ${pincode}, ${state}, Mobile: ${mobile}, ${landmark}`;
    // const subtotal = cartProduct && cartProduct.reduce((acc, item) => acc + item.price * item.qty, 0)
    const subtotal = (cartProduct && cartProduct.body[0]?.productId.price) * quantity

    const shipping = 40
    const total = subtotal + shipping
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    useEffect(() => {
        if (userInfo) {
            dispatch(getCart(userInfo?._id))
        } else {
            navigate('/login')
        }
    }, [dispatch, userInfo, navigate])

    const placeOrderHandler = () => {
        if (userInfo) {
            dispatch(createOrder(userInfo?._id, cartProduct && cartProduct.body[0]?.productId._id, quantity, total, showAddress))
            Swal.fire({
                icon: 'success',
                title: 'Order Placed',
                text: 'Your order has been placed successfully',
            })
            setTimeout(() => {
            navigate('/')
            }, 2000)
        } else {
            navigate('/login')
        }
    }
    return {
        cartProduct,
        showAddress,
        name,
        addressShow,
        setAddressShow,
        showPayment,
        setShowPayment,
        showReview,
        setShowReview,
        subtotal,
        shipping,
        total,
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity,
        placeOrderHandler,
        placeOrderHandler
    }
}