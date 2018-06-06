import React from 'react'

const Bounty = (props) => {
    const { fName, lName, amount, living, type, id, handleEdit, bounty, handleDelete } = props
    return (
        <div id={id}>
            <h4>{`${fName} ${lName}`}</h4>
            <p>{amount}</p>
            <p>{living ? 'Alive' : 'Dead'}</p>
            <p>{type}</p>
            <button onClick={() => handleEdit(bounty, id)}>EDIT</button>
            <button onClick={() => handleDelete(id)}>DELETE</button>
        </div>
    )
}

export default Bounty