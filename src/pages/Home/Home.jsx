import React from 'react'
import useStyles from "./styles";
import girl from '../../assets/girl-with-bags.png'
import { Button } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';
import hoodies from '../../assets/hoodies.jpg'
import jeans from '../../assets/jeans.jpg'
import dresses from '../../assets/dresses.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    const classes = useStyles();

    return (
        // mainContainer
        <div className={classes.container}>
            {/* container with intro img and text */}
            <div className={classes.introContainer}>
                <div className={classes.textPart}>
                    <div>
                        <h5 style={{ marginLeft: "1rem" }}>Shop</h5>
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
            {/* container with cards */}
            <div className={classes.cardsContainer}>
                <h3>2023 New Arrivals</h3>
                <div className={classes.cards}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            height="600"
                            image={hoodies}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Hoodies and Sweatshirt</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=hoodies"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>


                    </Card>
                    <Card className={classes.card} >
                        <CardMedia
                            component="img"
                            height="600"
                            image={jeans}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Jeans and Trousers</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=jeans"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>


                    </Card>
                    <Card className={classes.card} >
                        <CardMedia
                            component="img"
                            height="600"
                            image={dresses}
                        />
                        <CardContent className={classes.details}
                        >
                            <h4>Dresses</h4>
                            <div className={classes.shop}>
                                <p>Shop Now!</p>
                                <a href="/search?q=dresses"><ArrowForwardIcon /></a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div >
    )
}

export default Home