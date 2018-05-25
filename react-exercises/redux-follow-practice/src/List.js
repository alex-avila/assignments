import React from 'react'

import { connect } from 'react-redux'
import { removePidgeon } from './redux'

import Pidgeon from './Pidgeon'

function List(props) {
    const { pidgeons, removePidgeon } = props

    return (
        <div>
            {
                pidgeons.map((pidgeon, i) =>
                    <Pidgeon
                        key={i}
                        {...pidgeon}
                        removePidgeon={removePidgeon}
                        index={i}

                    />
                )
            }
        </div>
    )
}

export default connect(state => ({ pidgeons: state }), { removePidgeon })(List)