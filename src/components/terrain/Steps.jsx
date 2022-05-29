import React from 'react'
import StepLine from './StepLine';
import classes from './Steps.module.css';

const Steps = () => {
  return (
    <div className={classes.stepContainer}>
        <div className={classes.step1}>
            <StepLine num="1" text="Découvrez Notre Séléction " />
        </div>
        <div className={classes.step2}>
            <StepLine num="2" text="Affinez vos choix en fonction de votre localisation,
             sports préférés, surface des terrains ... " />
        </div>
        <div className={classes.step3}>
            <StepLine num="3" text="Réservez votre terrain  " />
        </div>


    </div>
  )
}

export default Steps