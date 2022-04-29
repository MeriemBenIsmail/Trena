import React from 'react'
import classes from './Coach.module.css';
import { Line } from '../../UI/line/Line';
export const Coach = () => {
  return (
    <div className={classes.coachSection}>
        <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Coachs Personnels</h2>
        </div>
    </div>
  )
}
