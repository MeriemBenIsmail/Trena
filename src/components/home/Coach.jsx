import React from 'react'
import classes from './Coach.module.css';
import { Line } from '../../UI/line/Line';
import coachs from '../../common/data/Coachs.json'

export const Coach = () => {
  const animationDelay = (id) => {
   
      return id-2
    

  }
  return (
    <div className={classes.coachSection}>
        <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Coachs Personnels</h2>
        </div>
        <div className={classes.coachWrapper}>
          <div className={classes.wrapper}>
            <div className={classes.outer}>
                 
                    
                    
                    
                    
                    
                {
                  coachs.map((coach) => (
                    
                    
                    <div key={coach.id} className={classes.card} style={{animationDelay:`calc(3s*${animationDelay(coach.id)})`}}>
                
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach${coach.id}.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>{coach.firstname}</span>
                            <span className={classes.name}>{coach.lastname}</span>
                            <p>{coach.profession}</p>
                        </div>
                      </div>
                    </div>
                  ))
                   }
            </div>
          </div>
          <div className={classes.intro}>
            <h2 className={classes.title}>Entraîneurs Sportifs</h2>
            <h4 className={classes.desc}>Le Personal Training consiste en l’accompagnement sur mesure d’une personne dans une démarche de changement physique et mental, à un moment clé de sa vie, à partir des besoins qu’elle exprime. Notre site vous offre une liste variée d'entraineurs personnels contenant leurs contacts et leurs descriptions pour vous faciliter la recherche !</h4>
          </div>
        </div>
    </div>
  )
}
