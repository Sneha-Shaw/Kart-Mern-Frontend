import React from 'react'
import { Card, CardMedia, CardContent } from '@mui/material';
import useStyles from "./styles";
import { useNavigate,useLocation } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CardComponent = ({ product }) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;


    const redirectHandler = () => {
        navigate(`/product/${product?._id}`)
    }
    const [show, setShow] = React.useState(false);


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
                    </div>
                    {
                        path === "/wishlist" && <MoreHorizIcon className={classes.more} fontSize="large" onClick={() => setShow(!show)} />
                    }
                    
                    {
                        path === "/wishlist" && show &&
                        <div className={classes.dropdown}>
                            <p>Delete</p>
                        </div>
                    }
                </CardContent>


            </Card>
        </div>
    )
}

export default CardComponent