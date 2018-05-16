import React from 'react';

import Cards from './components/Cards';

import './App.css';

const vacationSpots = [  
  {
    place: "Meridian, ID",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const App = () => {
  return (
    <Cards vacationSpots={vacationSpots}/>
  )
}

export default App;
