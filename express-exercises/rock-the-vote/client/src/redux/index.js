import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import issues from './issues'

const rootReducer = combineReducers({ issues })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store