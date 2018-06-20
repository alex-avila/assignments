import axios from 'axios'

const initialState = {
    decks: [],
    deck: []
}

export const getDecks = () => {
    return dispatch => {
        axios.get('/decks').then(response => {
            dispatch({
                type: 'GET_DECKS',
                decks: response.data
            })
        })
    }
}

export const getDeck = id => {
    return dispatch => {
        axios.get('/decks/' + id).then(response => {
            dispatch({
                type: 'GET_DECK',
                deck: response.data
            })
        })
    }
}

export const updateCard = (deckId, cardId, body) => {
    return dispatch => {
        axios.put(`/decks/${deckId}/cards/${cardId}`, {quality: body}).then(response => {
            dispatch(getDecks())
        })
    }
}

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DECKS':
            return {...state, decks: action.decks}
        case 'GET_DECK':
            return {...state, deck: action.deck}
        case 'UPDATE_CARD':
            return state
        default:
            return state
    }
}

export default decksReducer
