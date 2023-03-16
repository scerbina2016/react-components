import React, {FC} from 'react'
import { ICard } from '../types/types'
import CardItem from './CardItem';
import classes from '../style/CardList.module.css'

interface CardListProps {
    
    cards: ICard[];

}


const CardList: FC<CardListProps>= ({cards}) => {
    
  return (
    <div className={classes.cardList}>
      {cards.map(card =>
        <CardItem key={card.id} card={card}/> 
       )}
    </div>
  )
}

export default CardList
