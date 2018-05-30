import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'


const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.weather,
                dailyPlots: action.dailyPlots
            }
        default:
            return state
    }
}

const location = {
    lat:'39.9042',
    lon: '116.4074'
}
const weatherUrl = `https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/15d7d4d439f6c0a565d82cfc94fe22a8/${location.lat},${location.lon}`
export const getWeather = () => {
    return dispatch => {
        axios.get(weatherUrl).then(response => {
            dispatch({
                type: 'GET_WEATHER',
                weather: response.data,
                dailyPlots: response.data.daily.data.map((day, i) => {
                    return {x: new Date(day.time * 1000), y: (day.temperatureHigh + day.temperatureLow) / 2}
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
