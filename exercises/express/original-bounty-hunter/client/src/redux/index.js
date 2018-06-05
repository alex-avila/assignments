// IMPORTS
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'

// INITIAL STORE
const initialState = {
    bounties: []
}

// ACTIONS
export const getBounties = (state, action) => {
    return dispatch => {
        axios.get('/bounties').then(response => {
            dispatch({
                type: 'GET_BOUNTIES',
                bounties: response.data
            })
        })
    }
}

export const addBounty = body => {
    return dispatch => {
        axios.post('/bounties', body).then(response => {
            dispatch({
                type: 'ADD_BOUNTY',
                bounty: response.data
            })
        })
    }
}

export const editBounty = id => {

}

export const deleteBounty = id => {

}

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOUNTIES':
            return {
                ...state,
                bounties: action.bounties
            }
        case 'ADD_BOUNTY':
            return {
                ...state,
                bounties: [...state.bounties, action.bounty]
            }
        case 'EDIT_BOUNTY':
            return {

            }
        case 'DELETE_BOUNTY':
            return {

            }
        default:
            return state
    }
}

// CREATE AND EXPORT STORE
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

export default store