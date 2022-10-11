import React from 'react'
import useStyles from "./styles";
import SideBar from '../../components/SideBar/SideBar';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {ProfileLogic} from './ProfileLogic'

const UserProfile = () => {
  const classes = useStyles();
  const{
    user
  } = ProfileLogic()
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.settingsContainer}>
        {/* <h1>My Profile</h1> */}
          <div className={classes.profilePicture}>
            <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" />
            <div className={classes.profilePictureButton}>
              <EditIcon fontSize="large"/>
            </div>
          </div>

          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>First Name</h3>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Last Name</h3>
            <input type="text" placeholder="Last Name" />

          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Email</h3>
            <input type="text" placeholder="Email" 
            value={user && user.email}
            />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Mobile</h3>
            <input type="text" placeholder="Mobile"
            value={user && user.mobile}
             />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Address</h3>
            <input type="text" placeholder="Address" />
          </div>

          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>City</h3>
            <input type="text" placeholder="City" />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>State</h3>
            <input type="text" placeholder="State" />
          </div>


          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Zip Code</h3>
            <input type="text" placeholder="Zip Code" />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Country</h3>
            <input type="text" placeholder="Country" />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Password</h3>
            <input type="text" placeholder="Password" />
          </div>
          <Button variant='contained' className={classes.button}>Save</Button>
        
      </div>
    </div>
  )
}

export default UserProfile