import React from 'react'
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardComponent = ({ product }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    const redirectHandler = () => {
        navigate(`/product/${product?._id}`)
    }

    return (
        <div>
            <Card
                sx={{ margin: "1rem", cursor: "pointer" }}

            >
                <CardMedia
                    component="img"
                    // height="194"
                    image={product?.featureimg[0]}
                    onClick={redirectHandler}
                />
                <CardContent className={classes.details} >
                    <h3 className={classes.title} onClick={redirectHandler} >{product?.title}</h3>
                    <div className={classes.priceContainer}>
                        <p className={classes.price}  onClick={redirectHandler}>₹{product?.price}</p>

                        <Button variant="contained"  >Add to Cart</Button>
                    </div>
                    <CardActions >

                    </CardActions>
                </CardContent>


            </Card>
        </div>
    )
}

export default CardComponent