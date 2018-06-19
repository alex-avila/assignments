import axios from 'axios'

export const getDecks = () => {
    return dispatch => {
        axios.get('/decks').then(response => {
            dispatch({
                type: 'GET_DATA',
                decks: response.data
            })
        })
    }
}

const decksReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.decks
        default:
            return state
    }
}

export default decksReducer
