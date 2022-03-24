import React from 'react'
import google from '../../assets/google.png';
import fb from '../../assets/facebook.png';
import classes from './SocialMediaBox.module.css';
export const SocialMediaBox = () => {
  return (
    <div className={classes.socialBox}>
        <img src={google} className={classes.google} alt="" />
        <img src={fb} alt="" className={classes.fb} />
    </div>
  )
}
