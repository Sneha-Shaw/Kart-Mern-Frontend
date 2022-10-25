import React, { useEffect } from 'react'
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    addToWishlist,
    checkIfWishlist
} from '../../redux/actions/productAction';
const CardComponent = ({ product }) => {
    const { isWishlist } = useSelector(state => state.checkIfWishlist)
    const { userInfo } = useSelector(state => state.signInUser)
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(userInfo);
    const redirectHandler = () => {
        navigate(`/product/${product?._id}`)
    }
    console.log(isWishlist && isWishlist.isWishlist);
    useEffect(() => {
        dispatch(checkIfWishlist(userInfo?.body._id, product?._id))
    }, [dispatch])
    const ifwishlist =() => {
        // if(isWishlist && isWishlist.isWishlist===false){
            dispatch(addToWishlist(userInfo?.body._id, product?._id))
        // }
    }

    return (
        <div>
            <Card
                sx={{ margin: "1rem", cursor: "pointer", position: "relative" }}

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
                        <p className={classes.price} onClick={redirectHandler}>₹{product?.price}</p>

                        <Button variant="contained"  >Add to Cart</Button>
                    </div>
                    <CardActions sx={{position: "absolute", top:0, right: 0}}>
                        {
                            isWishlist && isWishlist.isWishlist ?
                                <FavoriteIcon fontSize="large" sx={{ color: "red" }} onClick={ifwishlist} />
                                :
                                <FavoriteBorderIcon fontSize="large" sx={{ color: "red" }} onClick={ifwishlist} />
                        }
                    </CardActions>
                </CardContent>


            </Card>
        </div>
    )
}

export default CardComponent