import React from 'react'
import classes from './Menu.module.css';
import { Icon } from '@iconify/react';
export const Menu = ({logoutUser}) => {
  return (
    <div className={classes.menuContainer}>
      <div className={classes.menuItemFirst}>
        <Icon width="max(1.8em,2.2vw)" height="max(1.8em,2.2vw)" icon="carbon:logout" color="white" />
        <h4 onClick={logoutUser}>Logout</h4>
      </div>
      <div className={classes.menuItemSecond}>
        <Icon width="max(1.8em,2.2vw)" height="max(1.8em,2.2vw)" icon="akar-icons:chat-edit" color="white" />
        <h4>Edit Profile</h4>
      </div>
    </div>
  )
}
