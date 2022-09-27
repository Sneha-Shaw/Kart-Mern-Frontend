import { Button } from '@mui/material';
import React from 'react'
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <h1 className={classes.heading}>Login</h1>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Email</label>
            <input type="email" className={classes.input} />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Password</label>
            <input type="password" className={classes.input} />
          </div>
          <Button variant="contained" color="primary" className={classes.button}>Login</Button>
          {/* </div> */}
          <div style={{ color: "black", marginTop: "1rem" }}>
            Don't have an account? <a href='/register'>Create One</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login