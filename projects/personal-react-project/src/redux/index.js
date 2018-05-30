import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'


const initialState = {
    graphModes: ['daily', 'hourly'],
    modeIndex: 1,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.weather,
                dailyPlots: action.dailyPlots,
                hourlyPlots: action.hourlyPlots,
                currentTemp: action.currentTemp,
                isLoading: false
            }
        case 'TOGGLE_MODE':
            return {
                ...state,
                modeIndex: state.modeIndex === 0 ? state.modeIndex + 1 : state.modeIndex - 1
            }
        default:
            return state
    }
}

const location = { lat: '39.9042', lon: '116.4074' }
const weatherUrl = `https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/15d7d4d439f6c0a565d82cfc94fe22a8/${location.lat},${location.lon}`
export const getWeather = () => {
    return dispatch => {
        axios.get(weatherUrl).then(response => {
            const dailyDate = response.data.daily.data
            const hourlyData = response.data.hourly.data
            const hourlyPlots = []
            // limit hourlyPlots to 8 hours
            for (let i = 0; i < 8; i++) {
                const time = new Date(hourlyData[i].time * 1000)
                hourlyPlots.push({x: time, y: hourlyData[i].temperature})
            }
            dispatch({
                type: 'GET_WEATHER',
                weather: response.data,
                dailyPlots: 
                    dailyDate.map((day, i) => {
                        return { x: new Date(day.time * 1000), y: (day.temperatureHigh + day.temperatureLow) / 2 }
                    }),
                hourlyPlots,
                currentTemp: response.data.currently.temperature
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const toggleMode = () => {
    return {
        type: 'TOGGLE_MODE'
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})


export default store
