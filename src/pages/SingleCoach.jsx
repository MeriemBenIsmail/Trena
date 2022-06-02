import {React, useState, useEffect} from 'react'
import Terrain from '../components/terrain/Terrain'
import Axios from 'axios';
import { useParams } from "react-router";
import Footer from '../components/shared/Footer';
import { NavbarColor } from '../components/shared/NavbarColor';

import { useUserContext } from "../contexts/userContext";
import Coach from '../components/coach/Coach';

const SingleCoach = () => {
  
    const { user, logoutUser } = useUserContext();
    const { id } = useParams();
    const [coach,setCoach]=useState({});
    
    useEffect(() => {
            
        Axios.get("http://localhost:3000/coachs/"+id).then( (response) => {

               setCoach(response.data);
               
       })
       .catch((error) => {
           console.error(error);
       });
      

},[]);

    return (
    <div>

        <NavbarColor user={user} logout={logoutUser}></NavbarColor>

        <Coach image={process.env.PUBLIC_URL + `/coachs/coach${id}.jpg`} id={coach.id} nom={coach.nom} prenom={coach.prenom} type={coach.type} contact={coach.contact} description={coach.description}  />
        <Footer />
    </div>
  )
}

export default SingleCoach