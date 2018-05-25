import { createStore } from 'redux'

const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, action.contact]
        case 'REMOVE_CONTACT':
            return state.filter((contact, i) => i !== action.index)
        default:
            return state
    }
}

export const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

export const removeContact = index => {
    return {
        type: 'REMOVE_CONTACT',
        index
    }
}

export const store = createStore(reducer)

// store.subscribe(() => {
//     console.log(store.getState());
// })