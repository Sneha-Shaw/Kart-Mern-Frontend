import React from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const classes = useStyles()
  const orderproducts = [
    { "name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },

  ]
  return (
    <div className={classes.container}>
      {/* cart */}
      <div className={classes.cart}>
        <h1 className={classes.cartTitle}>Your Cart</h1>
          <div className={classes.cartItem}>
            {orderproducts &&
              orderproducts.map(
                (product, index) => {
                  return (

                    <Card key={index}
                      sx={{ margin: "2rem 4rem", display: "flex", alignItems: "center", width: "100%", background: "#395B64", color: "white" }}>

                      <CardMedia
                        component="img"
                        // height="194"
                        sx={{ width: "20rem" }}
                        image={product.img}
                      />
                      <CardContent className={classes.details}>
                        <h3 className={classes.title}>{product.name}</h3>
                        <p className={classes.price}>₹{product.price}</p>
                        <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <p style={{ fontSize: '1.5rem' }}>Product will be Delivered by Next Week</p>
                      </CardContent>
                      <CardActions>
                        <div className={classes.cartItemQuantity}>
                          <button className={classes.cartItemQuantityBtn}>-</button>
                          <p className={classes.cartItemQuantityValue}>1</p>
                          <button className={classes.cartItemQuantityBtn}>+</button>
                        </div>
                        <Button variant='contained' startIcon={<DeleteIcon />} className={classes.cartItemRemoveBtn}>Remove</Button>
                      </CardActions>

                    </Card>

                  );
                })}
          </div>
      </div>
    </div>
  )
}

export default Cart
