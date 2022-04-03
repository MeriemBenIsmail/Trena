import classes from "./FormSection.module.css";
import { SignInForm } from "../SignInForm/SignInForm";
import { useState } from "react";
import {SignUpForm} from '../SignUpForm/SignUpForm';
import { ToggleBox } from "./ToggleBox";
import wave from '../../../assets/wave.svg';
import Popup from "../../../UI/popup/Popup";


const FormSection = (props) => {
    
    const [showPopup,setShowPopup] = useState(false);
    const text = ["Vous Etes Nouveau ? Rejoignez-Nous !","Déjà Membre ? Connectez-Vous !"]
    const [isClicked,setIsClicked] = useState(false);
    const [note,setNote] = useState(text[0]);
    const [form,setForm] = useState("SignInForm");

    const handleClick = () => {
        setIsClicked(!isClicked);
        note === text[0] ? setNote(text[1]) : setNote(text[0]);
        form === "SignInForm" ? setForm("SignUpForm") : setForm("SignInForm");
    }

    const popupTimeOut = () => {
      setTimeout(() => {
        setShowPopup(false)
      },5000)
    }
    
    
  return (
    <div className={classes.formSection}>
      <img src={wave} alt="" />
    
      <div className={classes.formContainer}>
      
          { form === "SignInForm" ? 
            <div>
               <SignInForm closePopup={popupTimeOut} onSubmitForm={props.onSubmitForm} showPopup={showPopup} setShowPopup={setShowPopup} /> 
            </div> : <SignUpForm  onSubmitForm={props.onSubmitForm} submitted={props.submitted} />}

      <div className={classes.toggleSection}><ToggleBox note={note} isClicked={isClicked} handleClick={handleClick} /></div>  
      
      </div>
        <Popup showPopup={showPopup}  />
    </div>
  );
};

export default FormSection;