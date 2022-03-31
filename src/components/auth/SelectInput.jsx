import React from 'react'
import classes from './SelectInput.module.css';
export const SelectInput = () => {
  return (
    <div className={classes.select}>
        <select>
            <option value="1">Coach Personnel</option>
            <option value="2">Propriétaire de terrain</option>
            <option value="3">Demandeur de réservation</option>
        </select>
    </div>
  )
}
