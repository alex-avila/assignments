import React from 'react';
import Header from './components/Header/Header'
import BlogList from './components/BlogList/BlogList'
import Footer from './components/Footer/Footer'
import HomeBackground from './images/home-bg.jpg'
import { blogPosts } from './data.json'

import './App.css'

const App = () => {
  return (
    <div>
      <Header background={HomeBackground} />
      <BlogList blogData={blogPosts} />
      <Footer />
    </div>
  )
}

export default App;
