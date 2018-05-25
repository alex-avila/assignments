import { createStore } from 'redux';



// set up reducer

const initialState = []

// the job of the reducer is to simply return a new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIDGEON':
            return [...state, action.pidgeon]
        case 'REMOVE_PIDGEON':
            return state.filter((pidgeon, i) => i !== action.index)
        default:
            return state
    }
}

export const removePidgeon = index => {
    return {
        type: 'REMOVE_PIDGEON',
        index
    }
}

export const addPidgeon = pidgeon => {
    return {
        type: 'ADD_PIDGEON',
        pidgeon
    }
}


// set up store

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})


// connect redux to our app using Provider

export default store;