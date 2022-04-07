import React from "react";

import classes from "./Step2.module.css";
import { SelectInput } from "../SelectInput";
import { TextField } from "../TextField";
export const StepTwo = (props) => {
  return (
    <div className={classes.stepTwo}>
     
     <div className={classes.select}>
      <SelectInput name="profession" form="signup" />
     </div>
         
      <TextField placeholder="+216 " label="Numéro de téléphone" name="telephone" type="text"  form="signup" />
        
   
    </div>
  );
};