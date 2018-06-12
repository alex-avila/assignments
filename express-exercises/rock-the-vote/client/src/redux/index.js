import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import issues from './issues'

const rootReducer = combineReducers({ issues })

const store = createStore(rootReducer, applyMiddleWare(thunk))

export default store