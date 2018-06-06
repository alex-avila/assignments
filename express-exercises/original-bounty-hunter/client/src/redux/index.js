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
                // entire bounties array
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
                // single added bounty
                bounty: response.data
            })
        })
    }
}

export const editBounty = (id, body) => {
    return dispatch => {
        axios.put('/bounties/' + id, body).then(response => {
            dispatch({
                type: 'EDIT_BOUNTY',
                // single updated bounty
                bounty: response.data
            })
        })
    }
}

export const deleteBounty = id => {
    return dispatch => {
        axios.delete('/bounties/' + id).then(response => {
            dispatch({
                type: 'DELETE_BOUNTY',
                // entire bounties array
                bounties: response.data
            })
        })
    }
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
            // does it have to do something with reference???
            // const newBounties = state.bounties
            // newBounties[newBounties.indexOf(newBounties.find(bounty => bounty.id === action.bounty.id))] = action.bounty
            return {
                ...state,
                bounties: state.bounties.map(bounty => {
                    if (bounty.id === action.bounty.id) {
                        return action.bounty
                    } else {
                        return bounty
                    }
                })
                // bounties: newBounties
            }
        case 'DELETE_BOUNTY':
            return {
                ...state,
                bounties: action.bounties
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