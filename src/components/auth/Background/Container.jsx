import React from 'react'
import classes from './Container.module.css';
import {PictureSection} from './PictureSection'
import FormSection from './FormSection';
import wavyLine from '../../../assets/wavyLine.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logowhite.png'
export const Container = (props) => {
  

  const [showForm, setshowForm] = useState( props.toggle && (window.innerWidth < 1000));
  const [submitted, setSubmitted] = useState(false);
  const onShow = () => {
    setshowForm(true);
  };
  const onSubmitForm = () => {
    setSubmitted(true);
  };
  const handleResize = () => {
    if (window.innerWidth > 1000) {
      setshowForm(false);
    } else {
      if (submitted) setshowForm(true);
    }
  };
  window.addEventListener("resize", handleResize);

  let formWhiteClass = ["", ""];
  if (showForm) {
    formWhiteClass[0] = classes.animate;
  } else {
    formWhiteClass[0] = classes.hidden;
  }
  if (submitted) {
    formWhiteClass[1] = classes.exit;
  } else {
    formWhiteClass[1] = "";
  }
  return (
    <div className={classes.authContainer}>
      <div className={classes.authHead}>
           <Link to='/home' className={classes.logo}>
                <img src={logo} alt="" />
            </Link>
      </div>
       
        <div className={`${
          submitted && !showForm ? classes.animate : classes.hidden
        } ${classes.authBody} `}>
            <div className={`${
            submitted && !showForm ? classes.animate : classes.hidden
          } ${classes.welcomeDiv} `}>
                <PictureSection submitted={submitted}
            showForm={showForm}
            onShow={onShow} />
            </div>
            
            <div className={`${formWhiteClass[0]} ${formWhiteClass[1]} ${classes.formWhite} `}>
                <FormSection auth={props.auth} onSubmitForm={onSubmitForm} submitted={submitted} /> 
            </div>
        </div>

    </div>
   
  )
}
