import React from 'react'
import classes from './Hero.module.css';
import { Navbar } from '../shared/Navbar';
import { motion } from 'framer-motion';
import { Button } from '../../UI/button/Button';
export const Hero = () => {

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
        <Navbar />
        <div className={classes.intro}>
            <div className={classes.parags}>
                <motion.div >
                     Avec la plateforme web TRENA

                </motion.div>
                <br />
                <motion.div >
                On vous offre la chance de pratiquer vos sports préférés.

                </motion.div>

                <br />
                <motion.div >
                     On met à votre disposition
                </motion.div>
                <motion.div >
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
