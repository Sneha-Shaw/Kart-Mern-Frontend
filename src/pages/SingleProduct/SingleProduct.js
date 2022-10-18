import React from 'react'
import { SingleProductLogic } from './SingleProductlogic'
import { Button } from '@mui/material';
import useStyles from "./styles";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const SingleProduct = () => {
  const classes = useStyles();
  const { product } = SingleProductLogic();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <img src={product?.img} alt="" className={classes.img} />
        </div>
        <div className={classes.imageOption}>
          <div className={classes.imageContainer}>
            <img src={product?.img} alt="" className={classes.img} />
          </div>
          <div className={classes.imageContainer}>
            <img src={product?.img} alt="" className={classes.img} />
          </div>
        </div>

      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{product?.name}</h1>
        <p className={classes.price}>₹{product?.price}</p>
        <div className={classes.Actions}>

          <div className={classes.quantity}>

            <AddIcon fontSize="large" className={classes.margin} />

            <p>1</p>
            <RemoveIcon fontSize="large" className={classes.margin} />

          </div>
          <Button variant="contained" color="primary" className={classes.button} >
          Add to Cart
        </Button>
        </div>
        <h3>Description</h3>
        <p className={classes.description}>{product?.desc}</p>
      </div>
    </div>

  )
}

export default SingleProduct