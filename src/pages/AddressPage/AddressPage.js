import { Button } from '@mui/material'
import React from 'react'
import useStyles from './styles'

const AddressPage = () => {
    const classes = useStyles()
  return (
    <div className={classes.container}>
        <h1>Select your delivery Address</h1>
        <div className={classes.yourAddress}>
            <h2>Sneha Shaw</h2>
            <p>Santoshpur, lalabagan</p>
            <p>Kolkata-700066, West Bengal</p>
            <p>Mobile: 9876543210</p>
            <Button variant="contained" color="primary">Deliver here</Button>
            <div>
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="primary">Delete</Button>
            </div>
        </div>
        <div className={classes.newAddress}>
            <h1>Add a new Address</h1>
            <div className={classes.form}>
                <div className={classes.input}>
                    <label>Full Name</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>Address</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>Pincode</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>City/District/Town</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>State</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>Landmark</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>Alternate Phone</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label>Address Type: </label>
                    <select>
                        <option>Home</option>
                        <option>Work</option>
                    </select>
                </div>
                <Button variant="contained" color="primary">Add Address</Button>
              
            </div>
        </div>
    </div>
  )
}

export default AddressPage