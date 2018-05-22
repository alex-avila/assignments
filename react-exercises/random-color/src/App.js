import React, { Component } from 'react';
import axios from 'axios';
import Color from './Color';
import withLoading from './withLoading';

import './App.css';

const ColorWithLoading = withLoading(Color);

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'ffffff',
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then(response => {
      this.setState({ color: response.data.new_color, isLoading: false })
    })
  }

  render() {
    return (
      <div className="wrapper">
        <ColorWithLoading isLoading={this.state.isLoading} color={this.state.color} />
      </div>
    )
  }
}

export default App;
