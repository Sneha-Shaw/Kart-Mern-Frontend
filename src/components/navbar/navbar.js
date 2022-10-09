import React from 'react'
import useStyles from "./styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
const Navbar = () => {
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <h1>KART</h1>
                    </Link>
                </div>
                <div className={classes.categories}>
                    <Link to="/men" style={{ textDecoration: 'none', color: 'white' }}>
                        <h4>Men</h4>

                    </Link>
                    <Link to="/women" style={{ textDecoration: 'none', color: 'white' }}>
                        <h4>Women</h4>

                    </Link>
                    <Link to="/Kids" style={{ textDecoration: 'none', color: 'white' }}>
                        <h4>Kids</h4>

                    </Link>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.search}>
                    <SearchIcon fontSize="large" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className={classes.icons}>
                    <Link to="wishlist" className={classes.icon}>
                        <FavoriteBorderIcon fontSize="large" />
                    </Link>
                    <Link to="cart" className={classes.icon}>
                        <ShoppingCartIcon fontSize="large" />
                    </Link>
                    <Link to="profile" className={classes.icon}>
                        <AccountCircleIcon fontSize="large" />
                    </Link>
                    <Link to="login" className={classes.icon}>
                        <Button variant="contained" color="primary">Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar