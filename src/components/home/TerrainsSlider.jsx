import React from 'react'
import classes from './TerrainsSlider.module.css';
import { Line } from '../../UI/line/Line';
import terrains from '../../common/data/Terrains.json';
import { TerrainCard } from '../terrain/TerrainCard';
export const TerrainsSlider = () => {
  return (
    <div className={classes.terrainWrapper}>
         <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Terrains Sportifs</h2>
        </div>
        <div className={classes.terrainSlider}>
            <div className={classes.container}>
                <div className={classes.terrains}>
                {terrains.map((val,key) => {
                    return <div className={classes.singleterrain}>
                        <TerrainCard id={val.id} title={val.title} description={val.description} address={val.address} surface={val.surface} image={val.image} review={val.review}  />
                    </div> 

                } )}
                </div>
            </div>
           
            

        </div>

    </div>
  )
}
