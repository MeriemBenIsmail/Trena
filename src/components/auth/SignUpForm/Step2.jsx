import React from "react";

import classes from "./Step2.module.css";
import { SelectInput } from "../SelectInput";
export const StepTwo = (props) => {
  return (
    <div className={classes.stepTwo}>
      <div>
          <SelectInput />
        
        
      </div>
    </div>
  );
};