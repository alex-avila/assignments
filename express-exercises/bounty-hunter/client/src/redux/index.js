import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import bounties from './bounties'

const rootReducer = combineReducers({ bounties })

const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log(store.getState()))

export default store