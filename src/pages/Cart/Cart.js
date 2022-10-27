import React, { useEffect,useState } from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import {
  getCart,
  deleteProductFromCart
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {

  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartProduct } = useSelector(state => state.getCart)
  const { userInfo } = useSelector(state => state.signInUser)
  const { data: deleteProduct, error } = useSelector(state => state.deleteProductFromCart)


  useEffect(() => {
    if (!error) {
      setTimeout(() => {
        dispatch(getCart(userInfo?._id))
      }, 1000)
    }
  }, [deleteProduct, dispatch, error])
  useEffect(() => {
    if (userInfo) {
      dispatch(getCart(userInfo?._id))
    } else {
      navigate('/login')
    }
  }, [dispatch, userInfo, navigate])

  const redirectHandler = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className={classes.container}>
      {/* cart */}
      <div className={classes.cart}>
        <h1 className={classes.cartTitle}>My Shopping Cart</h1>
        {/* <div className={classes.cartItem}> */}
        {cartProduct &&
          cartProduct.body.map(
            (product, index) => {
              return (

                <div className={classes.cartContainer}>

                  <Card className={classes.card} >
                    {/* <input 
                    type="checkbox"
                     className={classes.checkbox}
                    /> */}
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.productId.featureimg[0]}
                      sx={{ width: "20rem" }}
                      onClick={() => redirectHandler(product.productId._id)}

                    />
                    <CardContent className={classes.cardContent}
                      onClick={() => redirectHandler(product.productId._id)}
                    >

                      <h3>{product.productId.title}</h3>
                      <h3>₹{product.productId.price}</h3>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <IconButton onClick={() => { dispatch(deleteProductFromCart(userInfo?._id, product.productId._id)) }} >
                        <HighlightOffIcon fontSize='large' />
                      </IconButton>
                    </CardActions>
                  </Card>
                </div>

              );
            })}
        {/* </div> */}

      </div>

      <Card className={classes.cardTotal}>
        <div className={classes.content}>
          <h1>Subtotal</h1>
          <h1>₹{cartProduct && cartProduct.body.reduce((acc, item) => acc + Number(item.productId.price), 0)}</h1>
        </div>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => { navigate('/checkout') }} >
          Checkout
        </Button>
      </Card>

    </div>
  )
}

export default Cart
