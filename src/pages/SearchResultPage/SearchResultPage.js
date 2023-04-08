import React from 'react'
import Filter from '../../components/Filter/Filter'
import CardComponent from '../../components/Card/CardComponent'
import useStyles from "./styles";
import {SearchResultPageLogic } from './SearchResultPageLogic';


const SearchResultPage = () => {
  const classes = useStyles();
  const { searchResult } = SearchResultPageLogic();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Filter />
      </div>
      <div className={classes.right}>
        <div className={classes.cards}>
          {searchResult &&
            searchResult.products.map(
              (product, index) => {
                return (

                  <CardComponent product={product} key={index} />

                );
              })}
        </div>
      </div>

    </div>
  )
}

export default SearchResultPage