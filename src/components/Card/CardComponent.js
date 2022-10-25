import React, { useEffect } from 'react'
import { Button, Card, CardMedia, CardContent, CardActions, } from '@mui/material';
import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    addToWishlist,
    checkIfWishlist,
    addToCart
} from '../../redux/actions/productAction';
const CardComponent = ({ product }) => {
    const { isWishlist } = useSelector(state => state.checkIfWishlist)
    const { userInfo } = useSelector(state => state.signInUser)
    const {data} = useSelector(state => state.addToWishlist)
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirectHandler = () => {
        navigate(`/product/${product?._id}`)
    }
    
    useEffect(() => {
        dispatch(checkIfWishlist(userInfo?._id, product?._id))
    }, [dispatch])

    const addToWish =() => {
        // if(isWishlist && isWishlist.isWishlist===false){
            if(userInfo){
                dispatch(addToWishlist(userInfo?._id, product?._id))
            }else{
                navigate('/login')
            }
        // }
    }
    const addToCartHandler = () => {
        if(userInfo){
            dispatch(addToCart(userInfo?._id, product?._id))
        }else{
            navigate('/login')
        }
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

                        <Button variant="contained" onClick={addToCartHandler}  >Add to Cart</Button>
                    </div>
                    <CardActions sx={{position: "absolute", top:0, right: 0}}>
                        {
                            isWishlist && isWishlist.isWishlist ?
                                <FavoriteIcon fontSize="large" sx={{ color: "red" }} onClick={addToWish} />
                                :
                                <FavoriteBorderIcon fontSize="large" sx={{ color: "red" }} onClick={addToWish} />
                        }
                    </CardActions>
                </CardContent>


            </Card>
        </div>
    )
}

export default CardComponent