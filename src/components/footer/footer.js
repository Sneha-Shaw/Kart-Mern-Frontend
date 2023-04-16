import { Button } from '@mui/material';
import React from 'react'
import useStyles from "./styles";
import jeans from '../../assets/jeans.jpg'

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.offer}>
        {/* <h4>Get 50% off on your first order</h4> */}
        <h4>Subscribe to our newsletter and get 50% off on your first order</h4>
        <input type="text" placeholder="Enter your email" />
        <Button variant="contained">Subscribe</Button>
      </div>
      <div className={classes.footer}>
        <ul className={classes.footerLeft}>
          <h4>Get to know us</h4>
          <li><a href="/">About us</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Press</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
        <ul className={classes.footerRight}>
          <h4>Connect with us</h4>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Twitter</a></li>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">Youtube</a></li>
          <li><a href="/">Linkedin</a></li>
        </ul>
      </div>
      <hr className={classes.hr} />
      <div className={classes.bottom}>
        <p>© 2021 Ecommerce. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer