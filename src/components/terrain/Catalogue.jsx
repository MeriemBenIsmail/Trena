import React, { useState } from 'react'
import classes from './Catalogue.module.css';
import { Line } from '../../UI/line/Line';
import terrains from '../../common/data/Terrains.json';
import TerrainCardCatalogue from './TerrainCardCatalogue';
import Filters from './Filters';

const Catalogue = () => {
    const [criteria,setCriteria] = useState({
        type:'',
        ville:'',
        surface:{
            min:'',
            max:''
        },
        page:1,
    });

    
  return (
    <div className={classes.catalogueContainer}>
         <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Terrains Sportifs</h2>

        </div>
        <div className={classes.content}>
            <div className={classes.filters}>
                    <Filters terrains={terrains} criteria={criteria} setCriteria={setCriteria} />
            </div>
            <div className={classes.catalogue}>
                {
                    terrains.map((terrain,index) => (
                        <div key={index} className={classes.terrainCard}>
                            <TerrainCardCatalogue image={process.env.PUBLIC_URL + `/terrains/terrain${terrain.id}.jpg`} title={terrain.title} address={terrain.address} surface={terrain.surface} description={terrain.description} />

                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Catalogue