import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getWeather } from '../redux'

import '../../node_modules/react-vis/dist/style.css'
import {
    XYPlot,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis'


class Graph extends Component {
    componentDidMount() {
        this.props.getWeather()
    }
    
    render() {
        return (
            <XYPlot height={250} width={300} yPadding={25} xType={'time'}>
                <VerticalGridLines tickTotal={6} />
                <HorizontalGridLines />
                <XAxis tickFormat={v => `${v.getMonth()}/${v.getDate()}`} tickTotal={9} />
                <YAxis />
                <LineSeries data={this.props.dailyPlots} curve={'curveMonotoneX'} />
            </XYPlot>
        )
    }
}

export default connect(state => ({ weather: state.weather, dailyPlots: state.dailyPlots }), { getWeather })(Graph)