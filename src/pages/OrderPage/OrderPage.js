import React from 'react'
import useStyles from './styles'
import SideBar from '../../components/SideBar/SideBar'
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardMedia, CardContent } from '@mui/material';
import { GetOrderLogic } from './GetOrderLogic';

const OrderPage = () => {
  const classes = useStyles()
  const { orders } = GetOrderLogic()
  const orderFilter = ["All orders","Pending","Shipped", "Delivered", "Cancelled", "Returned"]

  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.orderContainer}>
        <div className={classes.orderHeader}>
          <div className={classes.search}>
            <SearchIcon fontSize='large' />
            <input type="search"
              className={classes.searchInput}
              placeholder="Search for your orders"
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
        <div className={classes.orderBody}>
          {orders&&
            orders.map(
              (product, index) => {
                return (

                  <Card key={index}
                    sx={{ margin: "2rem 4rem", display: "flex", alignItems: "center", width: "100%",background: "#395B64", color: "white" }}>

                    <CardMedia
                      component="img"
                      // height="194"
                      sx={{ width: "20rem" }}
                      image={product.productId.featureimg[0]}
                    />
                    <CardContent className={classes.details}>
                      <h3 className={classes.title}>{product.productId.title}</h3>
                      <p className={classes.price}>₹{product.productId.price}</p>
                      <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                      <p style={{fontSize: '1.5rem'}}>Product will be Delivered by Next Week</p>
                    </CardContent>


                  </Card>

                );
              })}
        </div>
      </div>
    </div>
  )
}

export default OrderPage