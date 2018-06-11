import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todos from './todoReducer'

const rootReducer = combineReducers({ todos })

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store