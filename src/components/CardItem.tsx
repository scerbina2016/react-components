import React, { FC } from 'react'
import { ICard } from '../types/types'
import classes from '../style/CardItem.module.css'

interface CardItemProps {

    card: ICard;

}

const CardItem: FC<CardItemProps> = ({card}) => {
  return (
    <div className={classes.cardListMain}>
      <div className={classes.card}>
       
        <div className={classes.cardFirstImg} style={{backgroundImage: `url(${card.thumbnail})`}} >
         {/*<img src={card.thumbnail} alt=''></img>*/}
        </div>
         <p className={classes.cardTitle}>{card.id}.  {card.title}</p>
         <p className={classes.cardPrise}>{card.price+' '}€</p>
      </div>
    </div>
  )
}

export default CardItem
