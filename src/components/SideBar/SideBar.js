import React from 'react'
import useStyles from './styles'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const SideBar = () => {
  const classes = useStyles()
  return (
    // my details, my orders, account settings> logout
    <div className={classes.container}>
      <ul className={classes.list}>
      <li className={classes.listItem}><a href='/profile'><ManageAccountsIcon fontSize='large' sx={{paddingRight: "2rem"}} />Account Settings</a></li>
        <li className={classes.listItem}><a href='/orders'><ListAltIcon fontSize='large' sx={{paddingRight: "2rem"}} />My Orders</a></li>
        <li className={classes.listItem}><a href='/notifications'><NotificationsActiveIcon fontSize='large' sx={{paddingRight: "2rem"}} />Notifications</a></li>
        </ul>
    </div>
  )
}

export default SideBar