import React from 'react'
import useStyles from './styles'
import SideBar from '../../components/SideBar/SideBar'
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import { GetOrderLogic } from './GetOrderLogic';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const OrderPage = () => {
  const classes = useStyles()
  const { orders,
    cancelOrderHandler,
    redirectHandler,
    searchProductsInOrderHandler,
    search,
    products } = GetOrderLogic()
  const orderFilter = ["All orders", "Pending", "Shipped", "Delivered", "Cancelled", "Returned"]



  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.orderContainer}>
        <div className={classes.orderHeader}>
          <div className={classes.search}>
            <SearchIcon fontSize='large' />
            <input type="search"
              className={classes.searchInput}
              placeholder="Search from your orders"
              value={search}
              onChange={(e) => searchProductsInOrderHandler(e)}
              // onKeyPress={(e) => e.key === 'Enter' ? searchProductsInOrderHandler() : null}
            />
          </div>
          <div className={classes.filter}>
            <select>
              <option>Order Type:</option>
              {orderFilter.map((orderFilter) => (
                <option
                  key={orderFilter}
                  value={orderFilter}
                >
                  {orderFilter}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* start of order body */}
        {/* if search is enabled show search results else all orders */}
        {search ? (
            <div className={classes.orderBody}>
            {products &&
              products.map(
                (product, index) => {
                  return (
                    <Card key={index}
                      className={classes.card}>

                      <CardMedia
                        component="img"
                        // height="194"
                        className={classes.cardImg}
                        image={product?.productId?.featureimg[0]}
                      />
                      <CardContent className={classes.details}>
                        <h3 className={classes.title}
                          onClick={() => redirectHandler(product?.productId?._id)}
                        >{product?.productId?.title}</h3>
                        <p className={classes.price}>₹{product?.productId?.price}</p>
                        <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Product will be Delivered by Next Week</p>
                        <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong> {product.status} </strong></p>
                        <h2 style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Total: ₹{product.amount}</h2>
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                        <IconButton onClick={() => { cancelOrderHandler(product._id) }} >
                          <HighlightOffIcon fontSize='large' />
                        </IconButton>
                      </CardActions>

                    </Card>
                  );
                })}
          </div>
          
        ) : (
          <div className={classes.orderBody}>
          {orders &&
            orders.map(
              (product, index) => {
                return (

                  <Card key={index}
                    className={classes.card}>

                    <CardMedia
                      component="img"
                      // height="194"
                      className={classes.cardImg}
                      image={product?.productId?.featureimg[0]}
                    />
                    <CardContent className={classes.details}>
                      <h3 className={classes.title}
                        onClick={() => redirectHandler(product?.productId?._id)}
                      >{product?.productId?.title}</h3>
                      <p className={classes.price}>₹{product?.productId?.price}</p>
                      <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                      <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Product will be Delivered by Next Week</p>
                      <p style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Status:<strong> {product.status} </strong></p>
                      <h2 style={{ fontSize: '1.5rem', margin: '.5rem 0' }}>Order Total: ₹{product.amount}</h2>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <IconButton onClick={() => { cancelOrderHandler(product._id) }} >
                        <HighlightOffIcon fontSize='large' />
                      </IconButton>
                    </CardActions>

                  </Card>

                );
              })}
        </div>
        )}
      </div>
    </div>
  )
}

export default OrderPage