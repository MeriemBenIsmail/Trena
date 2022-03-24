import React from 'react'
import classes from './Container.module.css';
import {PictureSection} from './PictureSection'
import FormSection from './FormSection'
export const Container = () => {
  return (
    <div className={classes.authContainer}>
        <div className={classes.authBody}>
            <div className={classes.pictureSection}>
                <PictureSection />
            </div>
            <div className={classes.formSection}>
                <FormSection /> 
            </div>
        </div>

    </div>
   
  )
}
