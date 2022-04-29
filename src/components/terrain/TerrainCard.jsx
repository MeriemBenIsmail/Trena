import React from 'react'
import classes from './TerrainCard.module.css';
import { Icon } from '@iconify/react';
import img1 from '../../assets/1.jpg';

export const TerrainCard = ({id,title,address,image,surface,type,available,description,review}) => {
  return (
    <div className={classes.cardWrapper}>
        <div className={classes.card}>
            <img src={img1}  alt="" />
        </div>
        <div className={classes.detail}>
            <h2>{title}</h2>
            <h4>{address}</h4>
            <span>Note : </span>
            {
                review.map((review) => {
                    if(review === 1){
                        return <Icon icon="ant-design:star-filled" color="#6BC4A6" />
                    } else if(review === 0) {
                        return <Icon icon="ant-design:star-outlined" color="white" />
                    } else if(review === 0.5) {
                        return <Icon icon="bi:star-half" color="#6BC4A6" />
                    }
                } )
            }
        </div>


    </div>
  )
}
