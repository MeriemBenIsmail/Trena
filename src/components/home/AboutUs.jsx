import React from 'react'
import classes from './AboutUs.module.css';
import { Line } from '../../UI/line/Line';
import { Card } from './Card';
import { motion } from 'framer-motion';
import { Circle } from '../../UI/circle/Circle';
import logo from '../../assets/logoorange.png'
export const AboutUs = () => {
    const variants1 = {
        hidden:{
            x:"-100vw",
            scale:0.8
        },
        animate:{
            x:"0",
            scale:1,
            transition:{
                duration:1,
                delay:0.5
            }
        }
    }
    const variants2 = {
        hidden:{
            x:"-100vw",
            scale:0.8
        },
        animate:{
            x:"0",
            scale:1,
            transition:{
                duration:1,
                delay:1
            }
        }
    }
    const variants3 = {
        hidden:{
            x:"-100vw",
            scale:0.8
        },
        animate:{
            x:"0",
            scale:1,
            transition:{
                duration:1,
                delay:1.5
            }
        }
    }
    const countervariants = {
        hidden:{
            opacity:0,
            scale:0.5
        },
        animate:{
            opacity:1,
            scale:1.1,
            transition:{
                duration:1,
                delay:1
            }

        }
    }
  return (
    <div className={classes.aboutus}>
        <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Qui Sommes-Nous ?</h2>

        </div>
        <div className={classes.content}>
            <div className={classes.cardsSection}>
                <div className={classes.circle}>

                </div>
                <div className={classes.cards}>
                    <motion.div variants={variants1} initial="hidden" animate="animate"  style={{marginLeft: "80px"}}><Card title="Terrains" content="Lore lorem lorem lorem" num="1" /></motion.div>
                    <motion.div variants={variants2} initial="hidden" animate="animate"  style={{marginLeft: "20px"}}><Card title="Coachs" content="Lore lorem lorem lorem" num="2" /></motion.div>
                    <motion.div variants={variants3} initial="hidden" animate="animate"  style={{marginLeft: "80px"}}><Card title="Equipes" content="Lore lorem lorem lorem" num="3" /></motion.div>

                </div>
            </div>
            <div className={classes.description}>
                    <div className={classes.logo}>
                        <img src={logo} alt="" />
                    </div>
                <p>Plateforme Web Tunisienne</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, modi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus?</p>
                <div className={classes.counter}>
                    <motion.div variants={countervariants} initial="hidden" animate="animate" className={classes.stat}>
                        <h2>+20</h2>
                        <p>Terrains Sportifs</p>
                    </motion.div>
                    <motion.div variants={countervariants} initial="hidden" animate="animate" className={classes.stat}>
                        <h2>+10</h2>
                        <p>Coachs Personnels</p>
                    </motion.div>
                    <motion.div variants={countervariants} initial="hidden" animate="animate" className={classes.stat}>
                        <h2>+5</h2>
                        <p>Sports Pratiqués</p>
                    </motion.div>
                </div>
            </div>
            <div className={classes.circleS}>
                <div className={classes.smallcircle}>
                    <Circle color="#6BC4A6" width="30px" height="30px" />
                </div>
                <div className={classes.innercircle}></div>
                <div className={classes.bigcircle}>
                    <Circle color="#005326" width="60px" height="60px" />
                </div>
                
            </div>
        </div>
    </div>
  )
}
