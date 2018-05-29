import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'


const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.weather
            }
        default:
            return state
    }
}

const weatherUrl = 'https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/15d7d4d439f6c0a565d82cfc94fe22a8/51.5033640,-0.1276250'
export const getWeather = () => {
    return dispatch => {
        axios.get(weatherUrl).then(response => {
            dispatch({
                type: 'GET_WEATHER',
                weather: Math.round(response.data.currently.temperature)
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
