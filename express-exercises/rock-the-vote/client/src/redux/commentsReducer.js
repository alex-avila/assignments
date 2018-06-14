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

export const postComment = (id, body) => {
    return dispatch => {
        axios.post('/issues/' + id + '/comments', {content: body}).then(response => {
            dispatch(getComments(id))
        })
    }
}

export const deleteComment = (issue, id) => {
    return dispatch => {
        axios.delete('/issues/' + issue + '/comments/' + id).then(response => {
            dispatch(getComments(issue))
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