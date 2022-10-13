import React from 'react'
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import useStyles from "./styles"; 

const CardComponent = ({product}) => {
    const classes = useStyles();

    return (
        <div>
            <Card
                sx={{ margin: "4rem" }}
            >


                <CardMedia
                    component="img"
                    // height="194"
                    image={product?.img}
                />
                <CardContent className={classes.details}>
                    <h3 className={classes.title}>{product?.name}</h3>
                    <div className={classes.priceContainer}>
                        <p className={classes.price}>₹{product?.price}</p>
                        <Button sx={{ fontSize: "1.6rem" }} variant="contained">Buy Now</Button>

                    </div>
                    <CardActions >
                        {/* <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton> */}

                    </CardActions>
                </CardContent>


            </Card>
        </div>
    )
}

export default CardComponent