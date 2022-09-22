import React from 'react'
import useStyles from "./styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <span>KART</span>
            </div>
            <div className={classes.nav}>
                <ul className={classes.list}>
                    <li><a  className={classes.listItem} href='/login'>Login</a></li>
                    <li><a  className={classes.listItem} href='/register'>Sign Up</a></li>
                    <li><a  className={classes.listItem} href='/cart'><ShoppingCartIcon fontSize='large' /></a></li>
                    <li><a  className={classes.listItem} href='/'><AccountCircleIcon fontSize='large'/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar