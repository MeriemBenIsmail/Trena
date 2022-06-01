import React, { useState , useEffect} from 'react'
import classes from './Catalogue.module.css';
import { Line } from '../../UI/line/Line';
//import terrains from '../../common/data/Terrains.json';
import CoachCat from './CoachCat';
import Coach from './Coach';
import Axios from 'axios';
import { Button } from '../../UI/button/Button';

const Catalogue = () => {
   

    const [coachs,setCoachs]=useState([]);
    const [region,setRegion] = useState(null)
    const [checked, setChecked] = useState([]);
    //minsurface , max surface
    const [surfaceRange,setSurfaceRange] = useState([0,100]);
  

    useEffect(() => {
            
                 Axios.get("http://localhost:3000/coachs").then( (response) => {

                        setCoachs(response.data);
                        
                })
                .catch((error) => {
                    console.error(error);
                });
    
    },[]);
   
    console.log(coachs)
    console.log(checked)
    return (
        <div className={classes.catalogueContainer}>
            <div className={classes.title}>
                <Line color="#6BC4A6" />
                <h2>Entraineurs</h2>

            </div>
            <div className={classes.content}>
               
                <div className={classes.catalogue}>
                    {
                        coachs.map((coach,index) => (
                            <div key={index} className={classes.terrainCard}>
                                <CoachCat image={process.env.PUBLIC_URL + `/coachs/coach${index+1}.jpg`} id={coach._id} prenom={coach.prenom} nom={coach.nom} sport={coach.type} informations={coach.description} contact={coach.contact} />

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
    }

export default Catalogue