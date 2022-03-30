import React from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../../UI/button/Button";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "../../../UI/SocialMediaBox/SocialMediaBox";
import { Line } from "../../../UI/line/Line";
import { Circle } from "../../../UI/circle/Circle";

export const SignInForm = (props) => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Email Invalid !")
      .required("Email Obligatoire !"),
    password: Yup.string()
      .required("Mot De Passe Obligatoire !")
      .min(8, "Mot de passe doit avoir au minimum 8 characters !"),
  });

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
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <div className={classes.circleContainer}>
              <Circle color="#6BC4A6" width="26px" height="26px" />
              <Circle color="#6BC4A6" width="32px" height="32px" />
              <Circle color="#005236" width="40px" height="40px" />
            </div>
            
            <h2 className={classes.title}>Connectez-Vous</h2>
            <Line />
          </div>
          <div className={classes.form}>
            <Form>
              <TextField label="Email" name="email" type="email" />
              <TextField label="Mot De Passe" name="password" type="password" />
              <div className={classes.submit}>
                <Button color="#005236" content="Se Connecter" type="submit" />
                
              </div>
              <div className={classes.social}>
                 
                  <SocialMediaBox />
              </div>
              <h5 className={classes.note}>Mot De Passe Oublié ?</h5>
              
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};