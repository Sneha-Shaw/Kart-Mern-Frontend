import React from 'react'
import useStyles from "./styles";
import { FilterLogic } from './FilterLogic';

const Filter = () => {
    const classes = useStyles();
    const {
        // filter,
        // setFilter,
        // color,
        colorOptions,
        // setColor,
        // size,
        // setSize,
        // type,
        // setType,
        sizeOptions,
        typeOptions,
    } = FilterLogic();
    return (
        <div className={classes.filterContainer}>
            <div className={classes.filter}>
                <div className={classes.filterTitle}>
                    <span className={classes.filterTitle}>Filter Products</span>
                    <span className={classes.filterTitle}>Clear</span>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Color</span>
                    <div className={classes.filterColorOptions}>
                        {colorOptions.map((color, index) => (
                            <div key={index} className={classes.filterColorOption}>
                                <input type="checkbox" name="color" className={classes.checkbox} />
                                <label htmlFor="color">{color}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Size</span>
                    <div className={classes.filterColorOptions}>
                        {sizeOptions.map((size, index) => (
                            <div key={index} className={classes.filterColorOption}>
                                <input type="checkbox" name="size" className={classes.checkbox} />
                                <label htmlFor="size">{size}</label>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.filterColor}>
                    <span className={classes.filterColorTitle}>Type</span>
                    <div className={classes.filterColorOptions}>
                        {typeOptions.map((type, index) => (
                            <div key={index} className={classes.filterColorOption}>
                                <input type="checkbox" name="type" className={classes.checkbox} />
                                <label htmlFor="type">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter