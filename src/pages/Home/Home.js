import React from 'react'
import useStyles from "./styles";

import girl from '../../assets/girl-with-bags.png'
import { HomeLogic } from './HomeLogic';
import { Button } from '@mui/material';
const Home = () => {
    const classes = useStyles();
    const {
        color,
        colorOptions,
        setColor,
        size,
        setSize,
        type,
        setType,
        sizeOptions,
        typeOptions
    } = HomeLogic();
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
            <div className={classes.filterContainer}>
                <div className={classes.sort}>
                    <select>
                        <option>Sort by:</option>
                        <option>Price(High to Low)</option>
                        <option>Price(Low to High)</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
                <div className={classes.colorFilter}>
                    <select>
                        <option>Color:</option>
                        {colorOptions.map((colorOption) => (
                            <option
                                key={colorOption}
                                value={colorOption}
                                style={{ color: colorOption }}
                            >
                                {colorOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.sizeFilter}>
                    <select>
                        <option>Size:</option>
                        {sizeOptions.map((sizeOption) => (
                            <option
                                key={sizeOption}
                                value={sizeOption}
                                style={{ color: sizeOption }}
                            >
                                {sizeOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.colorFilter}>
                    <select>
                        <option>Type:</option>
                        {typeOptions.map((typeOption) => (
                            <option
                                key={typeOption}
                                value={typeOption}
                                style={{ color: typeOption }}
                            >
                                {typeOption}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Home