import React, { Component } from 'react';

import Counter from './Counter/Counter'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }

    this.addCount = this.addCount.bind(this)
    this.subtractCount = this.subtractCount.bind(this)
  }

  addCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  subtractCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="wrapper">
        <Counter count={this.state.count} increment={this.addCount} decrement={this.subtractCount}/>
      </div>
    )
  }
}

export default App;
