import React from 'react'
import classes from './Container.module.css';
import wave1 from '../../assets/rectangle.svg';
import wave2 from '../../assets/wavyProfile.svg'
import { ProfileContainer } from './ProfileContainer';
export const Container = () => {
  return (
    <div className={classes.profileContainer}>
        <div className={classes.wave2}>
            <img src={wave2} alt="" />
        </div>
        <div className={classes.profileMain}>
            
            <ProfileContainer />
        </div>
        <div className={classes.wave1}>
           
        </div>
        
        

    </div>
  )
}
