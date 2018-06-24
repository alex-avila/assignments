import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import deckData from './decksReducer'
import cardsDueToday from './cardsReducer'

const rootReducer = combineReducers({ deckData, cardsDueToday })

const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log(store.getState()))

export default store
