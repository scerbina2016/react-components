import React,{useEffect, useState} from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import { ICard } from './types/types';
//import axios from 'axios';
import { base } from './base/baseItem';


const App = () => {

  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(base);
  },[])

  /*async function fetchUsers() {
    try {
      const response = await axios.get<ICard[]>('https://dummyjson.com/products/?limit=100');
        setCards(response.data);
      console.log(cards);
    } catch (e) {
      alert(e);
    }}*/
  
  return (
    <div >
      <Card onClick={()=>console.log('Click')} width='90vw' height='10vh'>
        <button onClick={()=> console.log('button click')}>Button</button>
        <div>Div in card</div>
      </Card>
     <CardList cards={cards}/>

    </div>
  );
}

export default App;
