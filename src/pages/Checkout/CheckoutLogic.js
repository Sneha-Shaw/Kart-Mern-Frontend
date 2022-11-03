import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getCart
} from '../../redux/actions/productAction';
import { getSingleUser } from '../../redux/actions/userAction'
import { createOrder } from '../../redux/actions/orderAction';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios'
import { loadScript } from "../../utils/loadScript"
import { makePaymentRazorpayHelper, successPaymentRazorpayHelper } from "../../components/Payment/helper"

export const CheckoutLogic = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { displayRazorpay } = PaymentCardLogic()
    const { cartProduct } = useSelector(state => state.getCart)
    const { userInfo } = useSelector(state => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)
    useEffect(() => {
        dispatch(getSingleUser(userInfo._id))
    }, [dispatch, userInfo._id])
    const [addressShow, setAddressShow] = useState(true)
    const [showPayment, setShowPayment] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [altMobile, setAltMobile] = useState("");
    const [landmark, setLandmark] = useState("");
    const [addressType, setAddressType] = useState("");

    const addAddress = () => {
        if (address !== "" && city !== "" && state !== "" && pincode !== "") {


            const body = {
                name: name,
                address: address,
                city: city,
                State: state,
                Pincode: pincode,
                altMobile: altMobile,
                Landmark: landmark,
                AddressType: addressType
            }
            axios.post(`http://localhost:5000/public/auth/add-address/${userInfo?._id}`, body)
                .then((res) => {
                    console.log(res);
                })
                .catch(err => { console.log(err) });
        }

    }

    var showAddress = `${user?.name}, ${user && user.address}, ${user && user.city} - ${(user?.Pincode)}, ${user?.State}, Mobile: ${user?.mobile}, Alt. Mobile - ${user?.altMobile}, Landmark: ${user?.Landmark}, AddressType: ${user?.AddressType}`

    const [quantity, setQuantity] = useState(1)
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
            const { REACT_APP_RAZORPAY_ID } = process.env

            // Display Razorpay and make Payment
            async function displayRazorpay() {
                const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
                if (!res) {
                    alert('Razorpay SDK failed to load. Are you online?')
                    return
                }
                // create order of Razorpay from backend and get orderId and amount
                const data = await makePaymentRazorpayHelper(cartProduct && cartProduct.body[0]?.productId._id)
                const options = {
                    key: REACT_APP_RAZORPAY_ID,
                    currency: data.currency,
                    amount: data.amount,
                    order_id: data.orderId,
                    name: 'Kart',
                    handler: async function () {
                        // Payment Success Helper
                        const res = await successPaymentRazorpayHelper(
                            data.orderId,
                            cartProduct && cartProduct.body[0]?.productId._id,
                            userInfo && userInfo._id
                        )
                        if (res) {
                            Swal.fire({
                                icon: 'success',
                                title: `Transaction completed and Order is Placed`,
                            })
                            dispatch(createOrder(userInfo?._id, cartProduct && cartProduct.body[0]?.productId._id, quantity, total, showAddress))
                            setTimeout(() => {
                                navigate('/')
                            }, 2000)
                        }
                    },
                    prefill: {
                        email: (user) && (user.email),
                        phone_number: (user) && (user.mobile)
                    }
                }
                const paymentObject = new window.Razorpay(options)
                paymentObject.open()
            }

            displayRazorpay();

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
        setName,
        setAddress,
        setCity,
        setState,
        setPincode,
        setAltMobile,
        setLandmark,
        setAddressType,
        address,
        city,
        state,
        pincode,
        altMobile,
        landmark,
        addressType,
        user,
        addAddress
    }
}