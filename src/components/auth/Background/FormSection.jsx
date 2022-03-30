import classes from "./FormSection.module.css";
import { SignInForm } from "../SignInForm/SignInForm";
import { useState } from "react";
import {SignUpForm} from '../SignUpForm/SignUpForm';
import { ToggleBox } from "./ToggleBox";
import wave from '../../../assets/wave.svg';

const FormSection = (props) => {

    const text = ["Vous Etes Nouveau ? Rejoignez-Nous !","Déjà Membre ? Connectez-Vous !"]
    const [isClicked,setIsClicked] = useState(false);
    const [note,setNote] = useState(text[0]);
    const [form,setForm] = useState("SignInForm");

    const handleClick = () => {
        setIsClicked(!isClicked);
        note === text[0] ? setNote(text[1]) : setNote(text[0]);
        form === "SignInForm" ? setForm("SignUpForm") : setForm("SignInForm");
    }
    
    
  return (
    <div className={classes.formSection}>
      <img src={wave} alt="" />
    
      <div className={classes.formContainer}>
      
          { form === "SignInForm" ? 
            <div>
               <SignInForm onSubmitForm={props.onSubmitForm} /> 
            </div> : <SignUpForm onSubmitForm={props.onSubmitForm} submitted={props.submitted} />}
      

      <div className={classes.toggleSection}><ToggleBox note={note} isClicked={isClicked} handleClick={handleClick} /></div>  
      
      </div>

    </div>
  );
};

export default FormSection;