import React from 'react';
import Header from './components/Header/Header';
import HitList from './components/HitList/HitList';

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <HitList />
    </div>
  )
}

export default App;
