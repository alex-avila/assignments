import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='landing'>
                <div className='landing__bg colors'>
                    <div className='color white'></div>
                    <div className='color cream'></div>
                    <div className='color orange'></div>
                    <div className='color pink'></div>
                    <div className='color blue'></div>
                </div>
                <div className="landing__content">
                    <Navbar />
                    <Info />
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    );
};

export default App;