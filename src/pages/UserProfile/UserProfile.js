import React from 'react'
import useStyles from "./styles";
import SideBar from '../../components/SideBar/SideBar';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ProfileLogic } from './ProfileLogic'
import Avatar from '@mui/material/Avatar';

const UserProfile = () => {
  const classes = useStyles();
  const {
    user,
    name,
    setName,
    email,
    mobile,
    address,
    pincode,
    city,
    state,
    setEmail,
    setMobile,
    setAddress,
    setPincode,
    setCity,
    setState,
    updateUserHandler
  } = ProfileLogic()
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.settingsContainer}>
        {/* <h1>My Profile</h1> */}
        <div className={classes.profilePicture}>
          {/* <img src="https://faces-img.xcdn.link/image-lorem-face-5919.jpg" alt="profile" /> */}
          <Avatar sx={{ width: "100%", height: "100%" }} />
          <div className={classes.profilePictureButton}>
            <EditIcon fontSize="medium" />
          </div>
        </div>

        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}> Name</h3>
          <input type="text" placeholder=" Name"
            value={name === '' ? user && user.user.name : name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Email</h3>
          <input type="text" placeholder="Email"
            value={email === '' ? user && user.user.email : email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Mobile</h3>
          <input type="text" placeholder="Mobile"
            value={mobile === '' ? user && user.user.mobile : mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Address</h3>
          <input type="text" placeholder="Address"
            value={address === '' ? user && user.user.address : address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>City</h3>
          <input type="text" placeholder="City"
            value={city === '' ? user && user.user.city : city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>State</h3>
          <input type="text" placeholder="State"
            value={state === '' ? user && user.user.State : state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>


        <div className={classes.inputContainer}>
          <h3 className={classes.inputLabel}>Zip Code</h3>
          <input type="text" placeholder="Zip Code"
            value={pincode === '' ? user && user.user.Pincode : pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        {/* <div className={classes.inputContainer}>
            <h3 className={classes.inputLabel}>Password</h3>
            <input type="text" placeholder="Password" />
          </div> */}
        <Button variant='contained' className={classes.button}
          onClick={updateUserHandler}
        >Update</Button>

      </div>
    </div>
  )
}

export default UserProfile