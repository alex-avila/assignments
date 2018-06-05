import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'

const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const getBounties = () => {
    return dispatch => {
        axios.get('/bounties').then(response => {
            console.log(response.data)
        })
    }
}

export const addBounty = () => {
    
}

export const editBounty = () => {

}

export const deleteBounty = () => {

}

const appReducer = createReducer({}, {
    'GET_BOUNTIES': getBounties,
    'ADD_BOUNTY': addBounty,
    'EDIT_BOUNT': editBounty,
    'DELETE_BOUNTY': deleteBounty
})

const store = createStore(appReducer, applyMiddleware(thunk))

export default store