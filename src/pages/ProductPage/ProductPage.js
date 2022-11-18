import React from 'react'
import Filter from '../../components/Filter/Filter'
import CardComponent from '../../components/Card/CardComponent'
import useStyles from "./styles";
import { ProductLogic } from './ProductLogic';
import CircularProgress from '@mui/material/CircularProgress';

const ProductPage = () => {
  const classes = useStyles();
  const { products, loading } = ProductLogic();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter />
      </div>
      <div className={classes.right}>
        {
          loading ? <CircularProgress size={50}
            sx={{
              color: "green",
              position: 'absolute',
              top: "1rem",
              left: "2rem",
              zIndex: 1,
            }} /> :

            <div className={classes.cards}>
              {products &&
                products.data.map(
                  (product, index) => {
                    return (

                      <CardComponent product={product} key={index} />

                    );
                  })}
            </div>
        }
      </div>

    </div>
  )
}

export default ProductPage