import axios from 'axios'

export const getComments = id => {
    return dispatch => {
        axios.get('/issues/' + id + '/comments').then(response => {
            dispatch({
                type: 'GET_COMMENTS',
                comments: response.data
            })
        })
    }
}

const issueReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_COMMENTS':
            return action.comments
        default:
            return state
    }
}

export default issueReducer