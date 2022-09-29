import React from 'react'
import useStyles from "./styles";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Card, CardMedia, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Wishlist = () => {
  const classes = useStyles();
  const products = [
    { "name": "T-shirt", "price": "200", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "300", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
    { "name": "T-shirt", "price": "400", "img": "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg" },
  ]
  const [color, setColor] = React.useState(false)
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        {products &&
          products.map(
            (product, index) => {
              return (

                <Card key={index}
                  sx={{ margin: "4rem" }}
                // onClick={() => {
                //     redirectHandler(
                //         product.course.courseSlug
                //     )
                // }}
                >
                  {/* <div className={classes.imgContainer}>
                                        <img src={product.img} alt="thumbnail" width="100%" height="100%" />
                                    </div> */}
                  {/* {
                    color ?
                      <IconButton aria-label="add to favorites"  onClick={() => setColor(!color)}>
                        <FavoriteIcon className={classes.wish} sx={{color: "red"}} />
                      </IconButton>
                      :
                      <IconButton aria-label="add to favorites"onClick={() => setColor(!color)}>
                        <FavoriteBorderIcon   className={classes.wish}  sx={{color: "red"}}/>
                      </IconButton>
                  } */}


                  <CardMedia
                    component="img"
                    // height="194"
                    image={product.img}
                  />

                  <CardContent className={classes.details}>
                    <h3 className={classes.title}>{product.name}</h3>
                    <div className={classes.priceContainer}>
                      <p className={classes.price}>₹{product.price}</p>
                      <Button sx={{ fontSize: "1.6rem" }} variant="contained">Buy Now</Button>

                    </div>
                  </CardContent>


                </Card>

              );
            })}
      </div>
    </div>
  )
}

export default Wishlist