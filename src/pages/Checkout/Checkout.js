import React from 'react'
import useStyles from "./styles";
import { Button, Card, CardMedia, CardContent } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { CheckoutLogic } from './CheckoutLogic';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Checkout = () => {
    const classes = useStyles()
    const {
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
        increaseQuantity,
        decreaseQuantity
    } = CheckoutLogic()

    return (
        <div className={classes.Maincontainer}>
            <h1>Checkout</h1>
            <div className={classes.container}>
                <div className={classes.Left}>
                    {
                        addressShow ?
                            <div className={classes.boxContainer}>
                                <h2>1. Select a delivery address</h2>
                                <div className={classes.absolute} onClick={() => { setAddressShow(false); setShowPayment(true) }} fontSize="large"><CloseIcon /></div>
                                <div className={classes.AddressBox}>
                                    <h4>Your Addresses</h4>
                                    <div className={classes.divider} style={{ margin: "0 1rem", width: "98%" }}></div>
                                    <div className={classes.Address}>
                                        <input type="radio" name="address" id="address" />
                                        <div className={classes.AddressDetails}>
                                            <p> <strong>{name}, &nbsp;</strong>
                                                {showAddress}
                                                &nbsp;&nbsp;&nbsp;
                                                |
                                                <Button>Edit Address</Button></p>

                                        </div>

                                    </div>
                                    <div className={classes.modalContainer}>
                                        <Popup
                                            // onClose={() => setOpenPopup(false)}
                                            trigger={
                                                <p className={classes.trigger}><AddIcon />Add a new address</p>
                                            }
                                            // open={openPopup}
                                            modal
                                            nested
                                        >
                                            {(close) => (
                                                <div className={classes.modal}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", paddingBottom: "1rem" }}>
                                                        <h1>Add a new Address</h1>
                                                        <CloseIcon fontSize="large" style={{ cursor: "pointer" }} onClick={close} />
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
                                                        <Button variant="contained" color="primary" onClick={close} >Add Address</Button>

                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                    {/* modal form */}
                                    {
                                        show &&
                                        <div className={classes.overlay} >

                                        </div>

                                    }

                                    <div className={classes.bottomContainer}>
                                        <Button variant="contained" color="primary" onClick={() => { setAddressShow(false); setShowPayment(true) }}>Use this address</Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={classes.noneditbox}>
                                <h2>1. Delivery address</h2>
                                <div className={classes.AddressDetails}>
                                    <p> <strong>{name}, &nbsp;</strong>
                                        {showAddress}
                                    </p>
                                </div>
                                {/* <p onClick={() => { setShow(!show) }}><AddIcon />Add a new address</p> */}
                                <p className={classes.absolute} onClick={() => { setAddressShow(true); setShowPayment(false); setShowReview(false) }}>Change</p>

                            </div>
                    }

                    {/* end of address container */}
                    {/* start of payment  */}
                    {
                        showPayment ?
                            <div className={classes.boxContainer}>
                                <h2>2. Payment Method</h2>
                                <div className={classes.absolute} onClick={() => { setShowPayment(false); setShowReview(true) }} fontSize="large"><CloseIcon /></div>

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
                                        <Button variant="contained" color="primary" onClick={() => { setShowPayment(false); setShowReview(true) }}>Use this payment method</Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={classes.noneditbox}>
                                <h2>2. Payment Method</h2>
                                <div className={classes.AddressDetails}>
                                    <label htmlFor="payment">Cash on Delivery</label>
                                </div>
                                <p className={classes.absolute} onClick={() => { setAddressShow(false); setShowPayment(true); setShowReview(false) }}>Change</p>
                            </div>
                    }

                    {/* start of review */}
                    {
                        showReview ?
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
                                                                <div className={classes.quantity}>
                                                                    <RemoveIcon fontSize="large" className={classes.margin} onClick={decreaseQuantity} />
                                                                    <p>{quantity}</p>
                                                                    <AddIcon fontSize="large" className={classes.margin} onClick={increaseQuantity} />

                                                                </div>
                                                                <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                                            </div>
                                                            <h3>₹{product.productId.price}</h3>
                                                        </CardContent>
                                                        
                                                    </Card>
                                                </div>

                                            );
                                        })}
                            </div>
                            :
                            <div className={classes.noneditbox}>
                                <h2>3. Review your order</h2>
                            </div>

                    }


                </div>
                <div className={classes.Right}>
                    <Card className={classes.cardTotal}>
                        {
                            addressShow &&
                            <Button variant="contained" color="primary" onClick={() => { setAddressShow(false); setShowPayment(true) }}>Use this address</Button>

                        }
                        {
                            showPayment &&
                            <Button variant="contained" color="primary" onClick={() => { setShowPayment(false); setShowReview(true) }}>Use this payment method</Button>

                        }
                        {
                            showReview &&
                            <Button className={classes.paymentButton}>Place Order</Button>

                        }
                        <div className={classes.divider} style={{ marginBottom: "2rem" }}></div>
                        <h1 className={classes.paymentTitle}>Order Summary</h1>
                        <div className={classes.paymentContainer}>
                            <h3>Subtotal</h3>
                            <h3>₹{subtotal}</h3>

                        </div>
                        <div className={classes.paymentContainer}>
                            <h3>Shipping</h3>
                            <h3>₹{shipping}</h3>
                        </div>
                        <hr />
                        <div className={classes.paymentContainer}>
                            <h3>Total</h3>
                            <h3>₹{total}</h3>
                        </div>

                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Checkout