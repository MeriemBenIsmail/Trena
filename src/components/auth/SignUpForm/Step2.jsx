import React from "react";

import classes from "./Step2.module.css";
import { SelectInput } from "../SelectInput";
import { TextField } from "../TextField";
export const StepTwo = (props) => {
  return (
    <div className={classes.stepTwo}>
     
     <div className={classes.select}>
      <SelectInput />
     </div>
         
      <TextField label="Numéro De Téléphone" name="telephone" type="text" />
        
   
    </div>
  );
};