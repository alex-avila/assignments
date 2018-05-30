import React, { Component } from 'react'

import { connect } from 'react-redux'

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
    render() {
        const { dailyPlots, hourlyPlots, modeIndex, graphModes } = this.props
        const dailyTickFormat = v => `${v.getMonth()}/${v.getDate()}`
        const hourlyTickFormat = v => `${v.getHours()}`
        return (
            <XYPlot 
                height={225} 
                width={350} 
                yPadding={10} 
                xType={'time'} 
                animation
            >
                <VerticalGridLines tickTotal={8} />
                <HorizontalGridLines />
                <XAxis
                    tickFormat={graphModes[modeIndex] === 'daily' ?
                        dailyTickFormat : hourlyTickFormat
                    }
                    tickTotal={8}
                    title="Time"
                />
                <YAxis title="Degrees" />
                <LineSeries
                    data={graphModes[modeIndex] === 'daily' ?
                        dailyPlots : hourlyPlots
                    }
                    color={'#B2C1F5'}
                    curve={'curveMonotoneX'}
                />
            </XYPlot>
        )
    }
}

export default connect(state => state, {})(Graph)