import React from 'react'
import { SingleProductLogic } from './SingleProductlogic'
import { Button } from '@mui/material';
import useStyles from "./styles";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const SingleProduct = () => {
  const classes = useStyles();
  const {
    product,
    show,
    setShow,
    addToWishHandler,
    addToCartHandler,
    isWishlist
  } = SingleProductLogic();
 
  const changeImage = (featureimg) => {
    setShow(featureimg)
  }
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <img src={show} alt="" className={classes.img} />
        </div>
        <div className={classes.imageOption}>

          {
            product?.featureimg.map((currentImg) => (
              <div className={classes.imageContainer}>
                <img src={currentImg} alt="" className={classes.img} onMouseOver={() => changeImage(currentImg)} />
              </div>
            ))
          }
        </div>

      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{product?.title}</h1>
        <p className={classes.price}><span style={{ color: "black" }}>Price: </span>₹{product?.price}</p>
        <div className={classes.colors}>
          <h3>Color:</h3>
          {product?.color.map((currentColor, index) => (
            <div className={classes.colorContainer} key={index}>
              <div className={classes.colorOption} style={{ backgroundColor: currentColor }}></div>
            </div>
          ))}
        </div>
        <div className={classes.sizes}>
          <h3>Size:</h3>
          <select className={classes.select}>
            <option value="not selected" >Select</option>
            {
              product?.size.map((currentSize, index) => (
                <option value={currentSize} key={index}>{currentSize}</option>
              ))
            }
          </select>
        </div>
        <div className={classes.Actions}>


          <Button variant="contained" color="primary" className={classes.button} onClick={addToCartHandler}>
            Add to Cart
          </Button>
          
            <Button variant="contained" color="primary" className={classes.button} onClick={addToWishHandler}>
              Add to Wishlist
            </Button>
           
         
        </div>
        <h3>Description</h3>
        <p className={classes.description}>{product?.desc}</p>
      </div>
    </div>

  )
}

export default SingleProduct