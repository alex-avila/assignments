import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'white'
    }
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then(response => {
      this.setState({color: response.data.new_color})
      console.log(response.data)
    })
  }

  render() {
    return (
      <div style={{height: '100%', background: `#${this.state.color}`}}></div>
    )
  }
}

export default App;
