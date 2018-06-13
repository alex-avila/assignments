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

const issuesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ISSUES':
            return action.issues
        default:
            return state
    }
}

export default issuesReducer