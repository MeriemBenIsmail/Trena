import React from 'react'
import classes from './CoachCat.module.css'
import { Button } from '../../UI/button/Button';
import { useNavigate } from 'react-router-dom';
const CoachCat = ({id,title,type,description,image}) => {
    
    const navigate = useNavigate();
    return (
    <div className={classes.card}>
        <div className={classes.img}>
            <img src={image} alt="" />
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
         
            <h4>Sport:{" "+type}</h4>
            <p>{description+"[...]"}</p>
        </div>
        <div className={classes.detailBtn}>
            <Button content="Détails" color="#005236" onClick={() => navigate(`/terrains/${id}`)} />
        </div>


    </div>
  )
} 
export default CoachCat