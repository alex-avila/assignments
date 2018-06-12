import axios from 'axios'


export const getIssues = () => {
    return dispatch => {
        axios.get('/issues').then(response => {
            
        })
    }
}


const issuesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ISSUES':
            return action.data
        default:
            return state
    }
}

export default issuesReducer