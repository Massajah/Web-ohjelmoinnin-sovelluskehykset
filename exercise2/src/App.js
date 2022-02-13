import React from "react";
import Title from './components/Title';
import Buttons from './components/Buttons';
import ItemsList from "./components/ItemsList";
import './App.css';
import { useState } from 'react';

function App() {

const [items ,setItems] = useState([

    { 
    id:1,
      qty: 0,
      name: "Milk"
    },

    { 
    id:2,
      qty: 0,
      name: "Bananas"
    },

    { 
    id:3,
      qty: 0,
      name: "Bread"
    },

    { 
      id:4,
      qty: 0,
      name: "Eggs"
      }

  ]);

  const click = (idCheck) =>{

    var randomNumber = Math.floor(Math.random() *10) +1;
    
    let newItems = [...items];
    
    let itemClickedIdex = newItems.findIndex(i => idCheck === i.id);
    
    if(itemClickedIdex != -1) {
    
      let newElement = {...items[itemClickedIdex]}
      newElement.qty = newElement.qty + randomNumber;
      newItems[itemClickedIdex] = newElement;
    
      setItems(newItems);
    }
}


  return(
    <div className="App">
    <Title />
    <ItemsList list={items} />
    <Buttons button= { click } />
    </div>
  );
}

export default App;
