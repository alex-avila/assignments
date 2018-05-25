import React from 'react'

import { connect } from 'react-redux'
import { removeContact } from './redux'

import Contact from './Contact'

const List = (props) => {
    const { contacts, removeContact } = props
    return (
        <div>
            {
                contacts.map((contact, i) =>
                    <Contact
                        key={i}
                        {...contact}
                        removeContact={removeContact}
                        index={i}
                    />
                )
            }
        </div>
    )
}

export default connect(state => ({ contacts: state }), { removeContact })(List)