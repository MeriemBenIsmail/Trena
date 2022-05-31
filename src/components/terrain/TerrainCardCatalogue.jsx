import React from 'react'
import classes from './TerrainCardCatalogue.module.css'
import { Button } from '../../UI/button/Button';
const TerrainCardCatalogue = ({title,address,type,surface,description,image}) => {
  
    return (
    <div className={classes.card}>
        <div className={classes.img}>
            <img src={image} alt="" />
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <h4>{address}</h4>
            <h4>Surface:{" "+surface+" m²"} </h4>
            <p>{description+"[...]"}</p>
        </div>
        <div className={classes.detailBtn}>
            <Button content="Détails" color="#FE982A" />
        </div>


    </div>
  )
}

export default TerrainCardCatalogue