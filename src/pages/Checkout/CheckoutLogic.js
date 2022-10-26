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
    const [addressShow, setAddressShow] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const name = "Sneha Shaw"
    const address = "Santoshpur, lalabagan"
    const city = "Kolkata"
    const pincode = "700066"
    const state = "West Bengal"
    const mobile = "9876543210"
    const landmark = "Near bus stand"
    const showAddress = `${address}, ${city}, ${pincode}, ${state}, Mobile: ${mobile}, ${landmark}`;

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
        setShowReview
    }
}