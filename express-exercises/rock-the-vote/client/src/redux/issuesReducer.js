import axios from 'axios'

export const getIssues = () => {
    return dispatch => {
        axios.get('/issues').then(response => {
            dispatch({
                type: 'GET_ISSUES',
                issues: response.data
            })
        })
    }
}

export const updateIssue = (id, body) => {
    return dispatch => {
        axios.put('/issues/' + id, body).then(response => {
            dispatch(getIssues())
        })
    }
}

export const createIssue = body => {
    return dispatch => {
        axios.post('/issues', {title: 'hello', content: body}).then(response => {
            dispatch(getIssues())
        })
    }
}

const issuesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ISSUES':
            return action.issues
        default:
            return state
    }
}

export default issuesReducer