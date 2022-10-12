import React from 'react'
import useStyles from "./styles"; 
import girl from '../../assets/girl-with-bags.png'
import { HomeLogic } from './HomeLogic';
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import Filter from '../../components/Filter/Filter';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home = () => {
    const classes = useStyles();
    const {
    
        products
    } = HomeLogic();
    return (
        // mainContainer
        <div className={classes.container}>
            {/* container with intro img and text */}
            <div className={classes.introContainer}>
                <div className={classes.textPart}>
                    <div>
                    <h5 style={{marginLeft: "2rem"}}>Shop</h5>
                    <h2>Anytime</h2>
                    <h2>Anywhere</h2>
                    </div>

                    <Button variant="contained" >Start Shopping &raquo;</Button>
                </div>
                <div className={classes.imgPart}>
                    <div className={classes.rectangle}>

                    </div>
                    <img src={girl} alt="" className={classes.img} />

                    <div className={classes.offer}>40% Off <br />on orders above Rs 3999</div>

                </div>

            </div>
            {/* container with filter */}
            <div className={classes.filterContainerMain}>
                <Filter/>
                <Button variant="contained" className={classes.filterBtn}>Filter</Button>
            </div>
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
                                        <CardActions >
                                            {/* <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton> */}

                                        </CardActions>
                                    </CardContent>


                                </Card>

                            );
                        })}
            </div>
        </div>
    )
}

export default Home