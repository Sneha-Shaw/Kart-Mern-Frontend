import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getCart
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

export const CheckoutLogic = () => {
    const [show, setShow] = useState(false);
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
    const subtotal = (cartProduct && cartProduct.body.reduce((acc, item) => acc + Number(item.productId.price), 0))*quantity
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
    return {
        show,
        setShow,
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
        decreaseQuantity
    }
}