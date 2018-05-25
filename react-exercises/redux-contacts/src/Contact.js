import React from 'react'

const Contact = (props) => {
    const {name, email, phone, removeContact, index} = props
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={() => removeContact(index)}>X</button>
        </div>
    )
}

export default Contact