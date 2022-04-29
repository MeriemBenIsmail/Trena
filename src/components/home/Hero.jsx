import React from 'react'
import classes from './Hero.module.css';
import { Navbar } from '../shared/Navbar';
import { motion } from 'framer-motion';
import { Button } from '../../UI/button/Button';
import logo from '../../assets/logoorange.png'
export const Hero = ({user,logoutUser}) => {

    const paragvariants = {
        hidden:{
            x:"-100vw",
            scale:0.8
        },
        animate:{
            x:0,
            scale:1,
            transition:{
                duration:1.5,
                bounce:0.3
            }

        }
    }
  return (
    <div className={classes.hero}>
        <Navbar user={user} logout={logoutUser} />
        <div className={classes.intro}>
            <div className={classes.parags}>
                <motion.div className={classes.first} >
                     Avec la plateforme web 
                     <div className={classes.logo}>
                        <img src={logo} alt="" />
                    </div>
                </motion.div>
                <br />
                <motion.div >
                On vous offre la chance de pratiquer vos sports préférés.

                </motion.div>
                <motion.div >
                     On met à votre disposition
                </motion.div>
                <motion.div className={classes.gradient} style={{color:" #6BC4A6",fontWeight:"600",scale:"1.2"}} >
                    +20 terrains sportifs
                </motion.div>
                <div className={classes.btn}><Button content="Terrains Sportifs" color="#005326" /></div>
                
                

            </div>
            <div>
                
            </div>
            

        </div>

    </div>
  )
}