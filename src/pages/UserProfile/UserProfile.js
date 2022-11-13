import React from 'react'
import useStyles from "./styles";
import SideBar from '../../components/SideBar/SideBar';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {ProfileLogic} from './ProfileLogic'
import Avatar from '@mui/material/Avatar';

const UserProfile = () => {
  const classes = useStyles();
  const{
    user,
    firstName,
    lastName
  } = ProfileLogic()
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.settingsContainer}>
        {/* <h1>My Profile</h1> */}
          <div className={classes.profilePicture}>
            {/* <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" /> */}
            <Avatar sx={{width: "100%",height: "100%"}} />
            <div className={classes.profilePictureButton}>
              <EditIcon fontSize="medium"/>
            </div>
          </div>

          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>First Name</h3>
            <input type="text" placeholder="First Name" 
            value={firstName}
            />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Last Name</h3>
            <input type="text" placeholder="Last Name"
            value={lastName}
             />

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
            <input type="text" placeholder="Address" 
            value={user && user.address}
            />
          </div>

          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>City</h3>
            <input type="text" placeholder="City" 
            value={user && user.city}
            />
          </div>
          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>State</h3>
            <input type="text" placeholder="State"
            value={user && user.State}
            />
          </div>


          <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Zip Code</h3>
            <input type="text" placeholder="Zip Code" 
            value={user && user.Pincode}
            />
          </div>
         
          {/* <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Password</h3>
            <input type="text" placeholder="Password" />
          </div> */}
          <Button variant='contained' className={classes.button}>Update</Button>
        
      </div>
    </div>
  )
}

export default UserProfile