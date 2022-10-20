import React from 'react'
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import useStyles from "./styles"; 
import { useNavigate } from 'react-router-dom';

const CardComponent = ({product}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const redirectHandler = () => {
        navigate(`/product/${product?.id}`)
    }

    return (
        <div>
            <Card
                sx={{ margin: "1rem",cursor: "pointer" }}
                onClick={redirectHandler}
            >


                <CardMedia
                    component="img"
                    // height="194"
                    image={product?.img[0]}
                />
                <CardContent className={classes.details}>
                    <h3 className={classes.title}>{product?.name.length>20? product?.name.substring(0,20) +"..." : product?.name}</h3>
                    <div className={classes.priceContainer}>
                        <p className={classes.price}>₹{product?.price}</p>
                        <Button variant="contained"  >Add to Cart</Button>

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