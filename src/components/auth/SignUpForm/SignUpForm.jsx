import React from "react";
import classes from "./SignUpForm.module.css";
import { Button } from "../../../UI/button/Button";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "../../../UI/SocialMediaBox/SocialMediaBox";
import { Line } from "../../../UI/line/Line";
import { Circle } from "../../../UI/circle/Circle";
import { useUserContext } from "../../../contexts/userContext";

export const SignUpForm = (props) => {
  const { registerUser } = useUserContext();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
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
            <Form>
              <TextField label="Email" name="email" type="email" />
              <TextField label="Mot De Passe" name="password" type="password" />
              <div className={classes.submit}>
                <Button color="#005236" content="S'inscrire" type="submit" />
                
              </div>
              <div className={classes.social}>
                  <h5 className={classes.note}>S'inscrire avec </h5>
                  <SocialMediaBox />
              </div>
              
              
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};