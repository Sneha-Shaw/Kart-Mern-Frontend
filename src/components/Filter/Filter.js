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
                    <select>
                        <option>Sort by:</option>
                        <option>Price(High to Low)</option>
                        <option>Price(Low to High)</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
                <div className={classes.filter}>
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
                <div className={classes.filter}>
                    <select>
                        <option>Size:</option>
                        {sizeOptions.map((sizeOption) => (
                            <option
                                key={sizeOption}
                                value={sizeOption}
                            >
                                {sizeOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.filter}>
                    <select>
                        <option>Type:</option>
                        {typeOptions.map((typeOption) => (
                            <option
                                key={typeOption}
                                value={typeOption}
                            >
                                {typeOption}
                            </option>
                        ))}
                    </select>
                </div>
    </div>
  )
}

export default Filter