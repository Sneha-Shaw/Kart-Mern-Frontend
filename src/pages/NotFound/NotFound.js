import React from 'react'
import useStyles from "./styles";

const NotFound = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <h1>404</h1>
        <h2>Page not found</h2>
    </div>
  )
}

export default NotFound