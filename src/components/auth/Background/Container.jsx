import React from 'react'
import classes from './Container.module.css';
import {PictureSection} from './PictureSection'
import FormSection from './FormSection';
import wavyLine from '../../../assets/wavyLine.svg';
import { useState } from 'react';
export const Container = () => {
  

  const [submitted, setSubmitted] = useState(false);
  const onSubmitForm = () => {
    setSubmitted(true);
  };

  return (
    <div className={classes.authContainer}>
        <div className={classes.authHead}>
          <h2 className={classes.logo}>Trena</h2>
          <img className={classes.wavyLine} src={wavyLine} alt="" />
        </div>
        <div className={classes.authBody}>
            <div className={classes.pictureSection}>
                <PictureSection />
            </div>
            
            <div className={classes.formSection}>
                <FormSection onSubmitForm={onSubmitForm} submitted={submitted} /> 
            </div>
        </div>

    </div>
   
  )
}
