import React from 'react'

const Bounty = (props) => {
    const { fName, lName, amount, living, type, id} = props
    return (
        <div id={id}>
            <h4>{`${fName} ${lName}`}</h4>
            <p>{amount}</p>
            <p>{living ? 'Alive' : 'Dead'}</p>
            <p>{type}</p>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
    )
}

export default Bounty