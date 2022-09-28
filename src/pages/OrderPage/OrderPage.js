import React from 'react'
import useStyles from './styles'
import SideBar from '../../components/SideBar/SideBar'
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardMedia, CardContent } from '@mui/material';

const OrderPage = () => {
  const classes = useStyles()
  const orderFilter = ["Shipped", "Delivered", "Cancelled", "Returned"]
  const orderproducts = [
    { "name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },

  ]
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
          {orderproducts &&
            orderproducts.map(
              (product, index) => {
                return (

                  <Card key={index}
                    sx={{ margin: "4rem", display: "flex", alignItems: "center", width: "100%",background: "#395B64", color: "white" }}>

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