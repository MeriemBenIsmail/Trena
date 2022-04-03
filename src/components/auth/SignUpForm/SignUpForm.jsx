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
import { useUserContext } from "../../../contexts/userContext";
export const SignUpForm = (props) => {
  const { registerUser, signInWithGoogle,errorSignUp } = useUserContext();

  const validate = Yup.object({
    email: Yup.string()
      .email("Email invalid !")
      .required("Email obligatoire !"),
    password: Yup.string()
      .required("Mot de passe obligatoire !")
      .min(8, " !")
      .matches(/^(?=.*[A-Z])/, "Doit contenir au moins 8 characters et 1 lettre majuscule")
     
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
        nextHandler()
        registerUser(values.email,values.password);
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
                  
                  <SocialMediaBox google={signInWithGoogle} />
                  <h5 className={classes.note}>Ou</h5>
              </div>
              <div className={classes.submit}>
         
        </div>
              
                {next === 1 && 
                
                 
                  <Form>
                    <div className={classes.formContent}>
                      <button className={classes.arrowLeft} onClick={previousHandler} disabled type="button">
                      <svg width="60px" height="80px" viewBox="0 0 50 80" >
                        <polyline fill="none" stroke="#005236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
                      45.63,75.8 0.375,38.087 45.63,0.375 "/>
                      </svg>  
                      </button>
                      <StepOne />
                      <button className={classes.arrowRight} type="submit">
                        <svg width="60px" height="80px" viewBox="0 0 50 80" >
                          <polyline fill="none" stroke="#005236" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
                        0.375,0.375 45.63,38.087 0.375,75.8 "/>
                        </svg>
                      </button>
                    </div>
                    
                    
                    
                  </Form>
                 
                 
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
          {errorSignUp && <div className={classes.signuperror}>
                  Email déjà utilisé !
              </div>}
        </div>
      )}
    </Formik>
  );
};