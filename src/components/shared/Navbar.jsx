import React from 'react'
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoorange.png';
import man from '../../assets/man.png'
export const Navbar = ({user,logoutUser}) => {
    console.log(user)
  return (
    <div className={classes.nav}>
        <Link to='/home' className={classes.logo}>
            <img src={logo} alt="" />
        </Link>
        <ul className={classes.navlinks}>
            <li ><Link className={classes.link} to='/home'>Accueil</Link></li>
            <li><Link className={classes.link} to='/terrain'>Terrains</Link></li>
            <li><Link className={classes.link} to='/coachs'>Coachs</Link></li>
        </ul>
       {
       !user ? <ul className={classes.connection}>
            <li className={classes.connectionItem}><Link className={classes.link} to='/login'>Se Connecter</Link></li>
            <li className={classes.connectionItem}>|</li>
            <li className={classes.connectionItem}><Link className={classes.link} to='/signup'>S'inscrire</Link></li>
        </ul> :
        
        <div className={classes.user}>
            <span className={classes.gradient} >Bienvenu, {user.email}</span> 
            <img src={man} alt="" />
            
        </div>
        }

    </div>
  )
}
