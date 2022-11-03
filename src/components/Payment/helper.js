import axios from 'axios'
const API = process.env.REACT_APP_NODE_API


// Make Payment with Razorpay (Create Order)
export const makePaymentRazorpayHelper = async (productId) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = {
        productId: productId,
    }

    const { data } = await axios.post(`${API}/private/payment/razorpay/init`, body, config)
    return data
}

// Success Payment
export const successPaymentRazorpayHelper = async (
    orderId,
    productId,
    userId

) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = {
        orderId: orderId,
        productId: productId,
        userId: userId
    }
    const { data } = await axios.post(`${API}/private/payment/razorpay/success`, body, config)
    return data
}