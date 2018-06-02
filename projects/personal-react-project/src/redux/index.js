import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'


const initialState = {
    weather: {},
    dailyPlots: [],
    hourlyPlots: [],
    currentTemp: 0,
    modeIndex: 1,
    graphModes: ['daily', 'hourly'],
    isLoading: true,
    isNewsLoading: true,
    articles: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            const { weather } = action
            return {
                ...state,
                weather,
                currentTemp: weather.currently.temperature,
                hourlyPlots: createHourlyPlots(weather.hourly.data),
                dailyPlots: createDailyPlots(weather.daily.data),
                isLoading: false
            }
        case 'TOGGLE_MODE':
            return {
                ...state,
                modeIndex: state.modeIndex === 0 ?
                    state.modeIndex + 1 : state.modeIndex - 1
            }
        case 'GET_NEWS':
            return {
                ...state,
                articles: action.articles
            }
        case 'SWITCH_CATEGORY':
            return {
                ...state,
                articles: action.articles,
                isNewsLoading: false
            }
        default:
            return state
    }
}


const createHourlyPlots = data => {
    const hourlyPlots = []
    for (let i = 0; i < 8; i++) {
        const date = new Date(data[i].time * 1000)
        hourlyPlots.push({ x: date, y: data[i].temperature })
    }
    return hourlyPlots
}

const createDailyPlots = data => {
    return data.map(day => {
        const date = new Date(day.time * 1000)
        const tempAvg = (day.temperatureHigh + day.temperatureLow) / 2
        return { x: date, y: tempAvg }
    })
}

const weatherAPIKey = '15d7d4d439f6c0a565d82cfc94fe22a8'
const location = { lat: '39.9042', lon: '116.4074' }
const weatherUrl = `https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${weatherAPIKey}/${location.lat},${location.lon}`
export const getWeather = () => {
    return dispatch => {
        axios.get(weatherUrl).then(response => {
            dispatch({
                type: 'GET_WEATHER',
                weather: response.data
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


const dispatchNewsRequest = (category, dispatch) => {
    axios.get(newsUrlBeginning + category + newsUrlEnd).then(response => {
        dispatch({
            type: 'GET_NEWS',
            articles: response.data.articles
        })
    })
}


// REMEMBER TO USE ATTRIBUTION LINK //
const newsAPIKey = '181d29365cb24d89aa4cf86a3fa61cca'
const newsUrlBeginning = `https://newsapi.org/v2/top-headlines?country=us&category=`
const newsUrlEnd = `&apiKey=${newsAPIKey}`
export const getNews = () => {
     return dispatch => {dispatchNewsRequest('general', dispatch)}
}

export const switchCategory = category => {
    return dispatch => {dispatchNewsRequest(category, dispatch)}
}



const store = createStore(reducer, applyMiddleware(thunk))

export default store
