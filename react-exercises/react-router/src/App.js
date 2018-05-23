import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/views/Home';
import About from './components/views/About';
import Services from './components/views/Services';

import './App.css';

const App = () => {
  const color = '#ffffff';
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" color={color} component={About} />
        <Route path="/services" component={Services} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
