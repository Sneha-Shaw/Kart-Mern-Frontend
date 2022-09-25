import React from 'react'
import useStyles from "./styles";

import girl from '../../assets/girl-with-bags.png'
import { Button } from '@mui/material';
const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.introContainer}>
                <div className={classes.textPart}>
                    <span>Shop</span>
                    <h2>AnyTime</h2>
                    <h2>AnyWhere</h2>
                    <Button variant="contained" >Shop Now</Button>
                </div>
                <div className={classes.imgPart}>
                    <div className={classes.rectangle}>

                    </div>
                    <img src={girl} alt="" className={classes.img} />

                    <div className={classes.offer}>40% Off <br />on orders above Rs 3999</div>

                </div>

            </div>
        </div>
    )
}

export default Home