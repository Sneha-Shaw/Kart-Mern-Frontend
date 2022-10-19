import React from 'react'
import Filter from '../../components/Filter/Filter'
import CardComponent from '../../components/Card/CardComponent'
import useStyles from "./styles";
import { HomeLogic } from '../Home/HomeLogic';


const ProductPage = () => {
  const classes = useStyles();
  const { products } = HomeLogic();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter />
      </div>
      <div className={classes.right}>
        <div className={classes.cards}>
          {products &&
            products.map(
              (product, index) => {
                return (

                  <CardComponent product={product} key={index} />

                );
              })}
        </div>
      </div>

    </div>
  )
}

export default ProductPage