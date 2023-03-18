import React, { FC,useState,useEffect } from 'react'
import { ICard} from '../types/types';
import { base } from '../base/baseItem';
import List from './List';
import CardItem from './CardItem';

const Main: FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    setCards(base);
  },[])
  /*async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data);
    } catch (e) {
      alert(e);
    }}*/
  return (
    
      <List items={cards} renderItem={(card: ICard) => <CardItem card={card} key={card.id}/>}/>

  )
}

export default Main
