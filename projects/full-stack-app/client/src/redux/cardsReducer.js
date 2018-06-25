const initialState = {}

const computeCardsDueToday = (deck) => {
    if (new Date(deck.lastUpdated).getDate() !== new Date(Date.now()).getDate()) {
        const { cards } = deck
        const cardObject = cards.reduce((final, card) => {
            if (card.hasBeenSeen) {
                final.newCards.push(card)
            } else {
                final.reviews.push(card)
            }
            return final
        }, { newCards: [], reviews: [] })
        const newCards = cardObject.newCards.slice(0, deck.settings.newCards.perDay)
        const reviews = cardObject.reviews.slice(0, deck.settings.reviews.perDay)
        const availableCards = [...newCards, ...reviews]
        // Add condition to check if it was created today
        console.log(deck.inQueue.reviews)
        if (new Date(deck.today).getDate() !== new Date(Date.now()).getDate()) {
            this.props.getCardsPerDeck(deck._id, availableCards)
        }
    }
}

export const getCardsDueToday = (id, deck) => {
    return {
        type: 'GET_CARDS_DUE_TODAY',
        id,
        cards: computeCardsDueToday(deck)
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
