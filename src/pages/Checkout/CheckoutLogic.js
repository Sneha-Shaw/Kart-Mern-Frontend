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

export const CheckoutLogic = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartProduct } = useSelector(state => state.getCart)
    const { userInfo } = useSelector(state => state.signInUser)
    const { user } = useSelector((state) => state.getSingleUser)

    useEffect(() => {
        dispatch(getSingleUser(userInfo._id))
    }, [])
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
            console.log("called");

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

    var showAddress = "";

    const [quantity, setQuantity] = useState(1)
    // if (user?.address !== undefined && user?.city !== undefined && user?.state !== undefined && user?.pincode !== undefined && user?.altMobile !== undefined && user?.landmark !== undefined && user?.addressType !== undefined) {
    //     showAddress = `${user?.address}, ${user?.city}- ${user?.Pincode}, ${user?.State}, ${user?.Landmark}`;

    // }
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