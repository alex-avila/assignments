import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './redux'


class App extends Component {
  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <div>
        <h1>{this.props.weather}</h1>
      </div>
    )
  }
}

export default connect(state => ({weather: state.weather}), { getWeather })(App)
