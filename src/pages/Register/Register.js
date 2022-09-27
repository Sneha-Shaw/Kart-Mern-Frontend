import { Button } from '@mui/material';
import React from 'react'
import useStyles from "./styles";

const Register = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <h1 className={classes.heading}>Create an account</h1>
                    {/* <div className={classes.form}> */}
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Name</label>
                        <input type="text" className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Email</label>
                        <input type="email" className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Password</label>
                        <input type="password" className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.label}>Confirm Password</label>
                        <input type="password" className={classes.input} />
                    </div>
                    <Button variant="contained" color="primary" className={classes.button}>Register</Button>
                    {/* </div> */}
                    <div style={{ color: "black", marginTop: "1rem" }}>
                        Already have an account? <a href='/login'>Login</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register