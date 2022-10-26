import React, { useEffect } from 'react'
import useStyles from "./styles";
import { Button, Card, CardMedia, CardContent } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import {
    getCart
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const Checkout = () => {
    const classes = useStyles()
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartProduct } = useSelector(state => state.getCart)
    const { userInfo } = useSelector(state => state.signInUser)

    useEffect(() => {
        if (userInfo) {
            dispatch(getCart(userInfo?._id))
        } else {
            navigate('/login')
        }
    }, [dispatch, userInfo, navigate])

    return (
        <div className={classes.Maincontainer}>
            <h1>Checkout</h1>
            <div className={classes.container}>
                <div className={classes.Left}>
                    <div className={classes.boxContainer}>
                        <h2>1. Select a delivery address</h2>
                        <div className={classes.AddressBox}>
                            <h4>Your Addresses</h4>
           
                            <div className={classes.divider} style={{ margin: "0 1rem", width: "98%"}}></div>
                            <div className={classes.Address}>
                                <input type="radio" name="address" id="address" />
                                <div className={classes.AddressDetails}>
                                    <p><strong>Sneha Shaw </strong>
                                        Santoshpur, lalabagan
                                        Kolkata-700066, West Bengal
                                        Mobile: 9876543210
                                        <Button>Edit Address</Button></p>
                                </div>
                            </div>
                            <p onClick={() => { setShow(!show) }}><AddIcon />Add a new address</p>
                            {/* modal form */}
                            {
                                show &&
                                <div className={classes.overlay} >
                                    <div className={classes.modal} >
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", paddingBottom: "1rem" }}>
                                            <h1>Add a new Address</h1>
                                            <CloseIcon fontSize="large" style={{ cursor: "pointer" }} onClick={() => { setShow(false) }} />
                                        </div>

                                        <div className={classes.divider}></div>
                                        <div className={classes.form}>
                                            <div className={classes.input}>
                                                <label>Full Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>Address</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>Pincode</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>City/District/Town</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>State</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>Landmark</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>Alternate Phone</label>
                                                <input type="text" />
                                            </div>
                                            <div className={classes.input}>
                                                <label>Address Type: </label>
                                                <select>
                                                    <option>Home</option>
                                                    <option>Work</option>
                                                </select>
                                            </div>
                                            <Button variant="contained" color="primary" >Add Address</Button>

                                        </div>
                                    </div>
                                </div>

                            }

                            <div className={classes.bottomContainer}>
                                <Button variant="contained" color="primary">Use this address</Button>
                            </div>
                        </div>
                    </div>
                    {/* end of address container */}
                    {/* start of payment  */}
                    <div className={classes.boxContainer}>
                    <h2>2. Payment Method</h2>
                    <div className={classes.AddressBox}>
                        <h4>Payment Options</h4>
                        <div className={classes.divider}></div>
                        <div className={classes.Payment}>
                            <input type="radio" name="payment" id="payment" />
                            <label htmlFor="payment">Cash on Delivery</label>
                        </div>
                        <div className={classes.Payment}>
                            <input type="radio" name="payment" id="payment" />
                            <label htmlFor="payment">Using Stripe</label>
                        </div>
                        <div className={classes.bottomContainer}>
                            <Button variant="contained" color="primary">Use this payment method</Button>
                        </div>
                    </div>
                    </div>
                    {/* start of review */}
                    <div className={classes.boxContainer}>
                    <h2>3. Review your order</h2>
                    {cartProduct &&
                    cartProduct.body.map(
                        (product, index) => {
                            return (

                                <div className={classes.cartContainer}>

                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            component="img"
                                            image={product.productId.featureimg[0]}
                                            sx={{ width: "20rem" }}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <div>
                                                <h3>{product.productId.title}</h3>
                                                <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                            </div>
                                            <h3>₹{product.productId.price}</h3>
                                        </CardContent>
                                    </Card>
                                </div>

                            );
                        })}
                        </div>

                </div>
                <div className={classes.Right}>
                    <Card className={classes.cardTotal}>
                        <h1 className={classes.paymentTitle}>Order Summary</h1>
                        <div className={classes.paymentContainer}>
                            <h3>Subtotal</h3>
                            <h3>₹{cartProduct && cartProduct.body.reduce((acc, item) => acc + Number(item.productId.price), 0)}</h3>

                        </div>
                        <div className={classes.paymentContainer}>
                            <h3>Shipping</h3>
                            <h3>₹100</h3>
                        </div>
                        <hr />
                        <div className={classes.paymentContainer}>
                            <h3>Total</h3>
                            <h3>₹900</h3>
                        </div>
                        <Button className={classes.paymentButton}>Place Order</Button>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Checkout