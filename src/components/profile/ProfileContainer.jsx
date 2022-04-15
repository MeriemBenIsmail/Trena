import React, { useState } from 'react'
import classes from './ProfileContainer.module.css';
import { Sidebar } from './sidebar/Sidebar';
import man from '../../assets/man.png';
import toggle from '../../assets/toggle.svg';
import { EditProfile } from './EditProfile';
import { Divider } from '../../UI/divider/Divider';
import { Setting } from './Setting';
import { Reservation } from './Reservation';
import { Team } from './Team';
import { Preferences } from './Preferences';
export const ProfileContainer = () => {
  
    const [active,setActive] = useState(0);
    
    return (
    <div className={classes.edit}>
        <div className={classes.content}>
            <Sidebar active={active} setActive={setActive} />
           
            {
                active === 0 &&
                <div className={classes.editP}>
                    <EditProfile />
                </div>
            
            }
            {
                active === 1 &&
                <div className={classes.editP}>
                    <Setting />
                </div>
            
            }
            {
                active === 2 &&
                <div className={classes.editP}>
                    <Reservation />
                </div>
            
            }
             {
                active === 3 &&
                <div className={classes.editP}>
                    <Team />
                </div>
            
            }
             {
                active === 4 &&
                <div className={classes.editP}>
                    <Preferences />
                </div>
            
            }
        </div>
       
        <div className={classes.toggleSection}>
            <img className={classes.profilePic} src={man} alt="" />
            <h4 className={classes.name}>Foulen Fouleni</h4>
            <img className={classes.toggle} src={toggle} alt="" />
        </div>
       


       
    </div>
  )
}
