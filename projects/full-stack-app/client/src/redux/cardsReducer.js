import axios from 'axios'

const initialState = {}

export const getCardsDueToday = (id, cards) => {
    return {
        type: 'GET_CARDS_DUE_TODAY',
        id,
        cards
    }
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS_DUE_TODAY':
            return { ...state, [action.id]: action.cards }
        default:
            return state
    }
}

export default cardsReducer
