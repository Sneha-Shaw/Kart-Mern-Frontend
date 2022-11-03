import React from 'react'
import useStyles from "./styles";
import girl from '../../assets/girl-with-bags.png'
// import { HomeLogic } from './HomeLogic';
import { Button } from '@mui/material';
// import CardComponent from '../../components/Card/CardComponent'
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useNavigate } from 'react-router-dom';
const Home = () => {
    const classes = useStyles();
    // const navigate = useNavigate();
    // const {

    // products
    // } = HomeLogic();
    return (
        // mainContainer
        <div className={classes.container}>
            {/* container with intro img and text */}
            <div className={classes.introContainer}>
                <div className={classes.textPart}>
                    <div>
                        <h5 style={{ marginLeft: "2rem" }}>Shop</h5>
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

            {/* <div className={classes.productSection}>
                <div className={classes.products}>
                    <div className={classes.header}>
                        <h3>MEN</h3>
                        <Button onClick={()=>{navigate('/see-products?category=Men')}} >View All<KeyboardDoubleArrowRightIcon fontSize="large" /></Button>
                    </div>
                 
                </div>
                <div className={classes.products}>
                    <div className={classes.header}>
                        <h3>WOMEN</h3>
                        <Button onClick={()=>{navigate('/see-products?category=Women')}} >View All<KeyboardDoubleArrowRightIcon fontSize="large" /></Button>
                    </div>
                    
                </div>
               

            </div> */}
        </div >
    )
}

export default Home