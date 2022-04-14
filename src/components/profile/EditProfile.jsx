import React from 'react'
import classes from './EditProfile.module.css';
import {ProgressCircle} from '../../UI/progressCircle/ProgressCircle';
import { TextField } from '../auth/TextField';
import {Formik , Form} from 'formik';
import { Button } from '../../UI/button/Button';
export const EditProfile = () => {
  return (
    <Formik
    initialValues={{
      lastname: "",
      firstname: "",
      birthday:"",
      address:"",
      phone:""
    }}
   
    onSubmit={(values) => {

        console.log(values)
    
  
    }}
    
  >
    {(formik) => (
      <div className={classes.editProfile}>
        <h2 className={classes.title}>
            Modifier Mon Profil
        </h2>
        <div className={classes.wrapper}>
            <div className={classes.form}>
            <Form>
                <div className={classes.formContent}>
                        <div className={classes.inputGroup}>
                            <TextField label="Nom" name="lastname" type="text"/>
                            <TextField label="Prénom" name="firstname" type="text"/>
                        </div>
                        <div className={classes.inputGroup}>
                            <TextField label="Date De Naissance" name="birthday" type="date"/>
                            <TextField label="Téléphone" name="phone" type="text"/>
                        </div>
                        <div className={classes.inputGroup}>
                            <TextField label="Adresse" name="address" type="text"/>
                        </div>
                        
                    
                        <div className={classes.submit}>
                        <Button color="#005236" content="Enregistrer" type="submit" />
                        
                        </div>
                </div>
                
                
            </Form>
            </div>
            <div className={classes.progressSection}>
                <h2>Profil Complet</h2>
                <ProgressCircle />
            </div>
        </div>
        
      </div>
    )}
  </Formik>
   
  )
}
