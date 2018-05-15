import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css'

const App = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};


export default App;
