import React from "react";
import classes from "./SignUpForm.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "../../../UI/SocialMediaBox/SocialMediaBox";
import { Line } from "../../../UI/line/Line";
import { Circle } from "../../../UI/circle/Circle";
import { useState } from "react";
import { StepOne } from "./Step1";
import { StepTwo } from "./Step2";
export const SignUpForm = (props) => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Email invalid !")
      .required("Email obligatoire !"),
    password: Yup.string()
      .required("PMot de passe obligatoire !")
      .min(8, " !")
      .matches(/^(?=.*[A-Z])/, "Doit contenir au moins 8 characters et 1 lettre majuscule"),
  });
  const [next, setNext] = useState(1);
  const nextHandler = () => {
    if (next === 1) {
      setNext(2);
    } else if (next === 2) {
      setNext(3);
    }
  };
  const previousHandler = () => {
    if (next === 2) {
      setNext(1);
    } else if (next === 3) {
      setNext(2);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        props.onSubmitForm();
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={classes.signUpForm}>
          <div className={classes.header}>
          <div className={classes.circleContainer}>
              <Circle color="#6BC4A6" width="26px" height="26px" />
              <Circle color="#6BC4A6" width="32px" height="32px" />
              <Circle color="#005236" width="40px" height="40px" />
            </div>
            <h2 className={classes.title}>Inscrivez-Vous</h2>
            <Line />
          </div>
          <div className={classes.form}>
              <div className={classes.social}>
                  
                  <SocialMediaBox />
                  <h5 className={classes.note}>Ou</h5>
              </div>
              <div className={classes.submit}>
         
        </div>
              
                {next === 1 && 
                <div className={classes.formContent}>
                <button className={classes.arrowLeft} onClick={previousHandler}>
                  <svg width="60px" height="80px" viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#005236" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  45.63,75.8 0.375,38.087 45.63,0.375 "/>
                  </svg>  
                </button>
                <Form>
                  <StepOne />
                </Form>
                <button className={classes.arrowRight} onClick={nextHandler} type="submit">
                  <svg width="60px" height="80px" viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#005236" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "/>
                  </svg>
                </button>

              </div>
                }
                 {next === 2 && 
                <div className={classes.formContent}>
                <button className={classes.arrowLeft} onClick={previousHandler}>
                  <svg width="60px" height="80px" viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#005236" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  45.63,75.8 0.375,38.087 45.63,0.375 "/>
                  </svg>  
                </button>
                <Form>
                  <StepTwo />
                </Form>
                <button className={classes.arrowRight} onClick={nextHandler}>
                  <svg width="60px" height="80px" viewBox="0 0 50 80" >
                    <polyline fill="none" stroke="#005236" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "/>
                  </svg>
                </button>

              </div>
                }
               
             
          </div>
        </div>
      )}
    </Formik>
  );
};