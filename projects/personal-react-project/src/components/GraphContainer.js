import React from 'react'

import Select from './Select'
import Graph from './Graph'

import './GraphContainer.css'

const GraphContainer = () => {

    return (
        <div className="graph-container">
            {/* Setings button */}
            {/* Hidden settings */}
            <Select />
            <Graph />
        </div>
    )
}

export default GraphContainer