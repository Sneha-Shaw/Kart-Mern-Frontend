import React from 'react'
import useStyles from './styles'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';

const SideBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    // my details, my orders, account settings> logout
    <div className={classes.container}>
      <ul className={classes.list}>
      <li className={classes.listItem}><a href='/profile'><ManageAccountsIcon fontSize='large' sx={{paddingRight: "2rem"}} />Account Settings</a></li>
        <li className={classes.listItem}><a href='/orders'><ListAltIcon fontSize='large' sx={{paddingRight: "2rem"}} />My Orders</a></li>
        <li className={classes.listItem}><a href='/notifications'><NotificationsActiveIcon fontSize='large' sx={{paddingRight: "2rem"}} />Notifications</a></li>
        <li className={classes.listItem}><a href='/' onClick={()=>dispatch(logoutUser())}><LogoutIcon fontSize='large' sx={{paddingRight: "2rem"}} />Logout</a></li>
        </ul>
    </div>
  )
}

export default SideBar