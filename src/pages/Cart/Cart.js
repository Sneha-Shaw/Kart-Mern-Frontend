import React from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const orderproducts = [
    { "name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },

  ]
  return (
    <div className={classes.container}>
      {/* cart */}
      <div className={classes.cart}>
        <h1 className={classes.cartTitle}>My Shopping Cart</h1>
        {/* <div className={classes.cartItem}> */}
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

                      <h3>{product.name}</h3>


                      <div className={classes.quantity}>

                        <AddIcon fontSize="large" className={classes.margin} />

                        <p>1</p>
                        <RemoveIcon fontSize="large" className={classes.margin} />

                      </div>
                      <h3>₹{product.price}</h3>
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
          <h2>₹500</h2>
        </div>
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>{navigate('/address')}} >
          Checkout
        </Button>
      </Card>
    </div>
  )
}

export default Cart
