import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import issues from './issuesReducer'
import comments from './commentsReducer'
import issue from './issueReducer'

const rootReducer = combineReducers({ issues, comments, issue })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store