import axios from 'axios'

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
    console.log(id)
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
                // single deleted bounty
                bounty: response.data
            })
        })
    }
}

const bountiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_BOUNTIES':
            return action.bounties
        case 'ADD_BOUNTY':
            return [...state.bounties, action.bounty]
        case 'EDIT_BOUNTY':
            // does it have to do something with reference???
            // const newBounties = state.bounties
            // newBounties[newBounties.indexOf(newBounties.find(bounty => bounty.id === action.bounty.id))] = action.bounty
            return state.map(bounty => {
                if (bounty._id === action.bounty._id) {
                    console.log(bounty)
                    console.log(action.bounty)
                    return action.bounty
                } else {
                    return bounty
                }
            })
        // bounties: newBounties
        case 'DELETE_BOUNTY':
            return state.filter(bounty => {
                if (bounty._id !== action.bounty._id) {
                    return true
                }
                return false
            })
        default:
            return state
    }
}

export default bountiesReducer