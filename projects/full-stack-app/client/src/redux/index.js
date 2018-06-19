import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import decks from './decksReducer'

const rootReducer = combineReducers({ decks })

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
