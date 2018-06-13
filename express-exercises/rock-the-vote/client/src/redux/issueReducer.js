import axios from 'axios'

export const getIssue = id => {
    return dispatch => {
        axios.get('/issues/' + id).then(response => {
            dispatch({
                type: 'GET_ISSUE',
                issue: response.data
            })
        })
    }
}

const issueReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_ISSUE':
            return action.issue
        default:
            return state
    }
}

export default issueReducer