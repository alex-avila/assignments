import React, { Component } from 'react'

import GraphContainer from './components/GraphContainer'
import TextDisplay from './components/TextDisplay'
import withLoading from './shared/withLoading'
import Wrapper from './components/Wrapper'

import { connect } from 'react-redux'
import { getWeather } from './redux'

import './App.css'

const WrapperWithLoading = withLoading(Wrapper)

class App extends Component {
  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <div className="main-wrapper" style={this.props.isLoading ? {justifyContent: 'center'} : null}>
        <WrapperWithLoading isLoading={this.props.isLoading} className="app-wrapper">
          <TextDisplay />
          <GraphContainer />
        </WrapperWithLoading>
      </div>
    )
  }
}

export default connect(state => ({ isLoading: state.isLoading }), { getWeather })(App)
