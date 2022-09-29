import React from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const OrderFinal = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const orderproducts = [
        { "name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
        { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
        { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },

    ]
    return (
        <div className={classes.container}>
            {/* cart */}
            <div className={classes.cart}>
                {/* <div className={classes.cartItem}> */}

                <h1 className={classes.cartTitle}>Review your Order</h1>
                {orderproducts &&
                    orderproducts.map(
                        (product, index) => {
                            return (

                                <div className={classes.cartContainer}>

                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            component="img"
                                            image={product.img}
                                            sx={{ width: "20rem" }}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <div>
                                                <h3>{product.name}</h3>
                                                <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                            </div>
                                            <h3>₹{product.price}</h3>
                                        </CardContent>
                                    </Card>
                                </div>

                            );
                        })}
                {/* </div> */}
                {/* <Card className={classes.paymentMethod}>
                    <h1>Payment Method</h1>
                    <div className={classes.paymentMethodContainer}>
                        <div className={classes.paymentMethodItem}>
                            <input type="radio" name="payment" id="cod" />
                            <label htmlFor="cod">Cash on Delivery</label>
                        </div>
                        <div className={classes.paymentMethodItem}>
                            <input type="radio" name="payment" id="online" />
                            <label htmlFor="online">Online Payment</label>
                        </div>
                    </div>
                </Card> */}
            </div>

            <Card className={classes.cardTotal}>
                <h1 className={classes.paymentTitle}>Order Summary</h1>
                <div className={classes.paymentContainer}>
                    <h3>Subtotal</h3>
                    <h3>₹{orderproducts && orderproducts.reduce((acc, item) => acc + Number(item.price), 0)}</h3>
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
    )
}

export default OrderFinal