import React from 'react'
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logowhite.png';
export const Navbar = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
        <ul className={classes.navlinks}>
            <li ><Link className={classes.link} to='/home'>Accueil</Link></li>
            <li><Link className={classes.link} to='/terrain'>Terrains</Link></li>
            <li><Link className={classes.link} to='/coachs'>Coachs</Link></li>
        </ul>
        <ul className={classes.connection}>
            <li className={classes.connectionItem}><Link className={classes.link} to='/login'>Se Connecter</Link></li>
            <li className={classes.connectionItem}>|</li>
            <li className={classes.connectionItem}><Link className={classes.link} to='/signup'>S'inscrire</Link></li>
        </ul>

    </div>
  )
}
