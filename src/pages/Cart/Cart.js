import React,{useEffect} from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import {
  getCart
} from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartProduct } = useSelector(state => state.getCart)
  const { userInfo } = useSelector(state => state.signInUser)

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

                  <Card className={classes.card}
                  onClick={() => redirectHandler(product.productId._id)}
                  >
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.productId.featureimg[0]}
                      sx={{ width: "20rem" }}
                    />
                    <CardContent className={classes.cardContent}>

                      <h3>{product.productId.title}</h3>


                      <div className={classes.quantity}>

                        <AddIcon fontSize="large" className={classes.margin} />

                        <p>1</p>
                        <RemoveIcon fontSize="large" className={classes.margin} />

                      </div>
                      <h3>₹{product.productId.price}</h3>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <IconButton>
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
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>{navigate('/address')}} >
          Checkout
        </Button>
      </Card>
    </div>
  )
}

export default Cart
