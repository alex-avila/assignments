import React from 'react'

import './Bounty.css'

const Bounty = (props) => {
    const { fName, lName, amount, living, type, id, handleEdit, bounty, handleDelete } = props
    return (
        <div className="bounty" id={id}>
            <div className="bounty__primary-info">
                <h4>{`${fName} ${lName}`}</h4>
                <p>{amount}</p>
            </div>
            <div className="bounty__extra-info">
                <span>{living ? 'Alive' : 'Dead'}</span>
                <span>{type}</span>
            </div>
            {/* <div className="bounty__popper">
                <i className="material-icons">more_horiz</i>
            </div> */}
            <div className="bounty__btns">
                <button onClick={() => handleEdit(bounty, id)}><i className="material-icons">edit</i></button>
                <button onClick={() => handleDelete(id)}><i className="material-icons">delete</i></button>
            </div>
        </div>
    )
}

export default Bounty