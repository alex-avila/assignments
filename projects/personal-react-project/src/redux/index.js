import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axios from 'axios'


const initialState = {
    weather: {},
    dailyPlots: [],
    hourlyPlots: [],
    graphModes: ['daily', 'hourly'],
    articles: {},
    currentTemp: 0,
    modeIndex: 1,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            const { weather } = action
            return {
                ...state,
                weather,
                currentTemp: weather.currently.temperature,
                hourlyPlots: getHourlyPlots(weather.hourly.data),
                dailyPlots: getDailyPlots(weather.daily.data),
                isLoading: false
            }
        case 'GET_NEWS':
            return {
                ...state,
                articles: action.articles
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


const getHourlyPlots = data => {
    const hourlyPlots = []
    for (let i = 0; i < 8; i++) {
        const time = new Date(data[i].time * 1000)
        hourlyPlots.push({x: time, y: data[i].temperature})
    }
    return hourlyPlots
}

const getDailyPlots = data => {
    return data.map(day => {
        return { x: new Date(day.time * 1000), y: (day.temperatureHigh + day.temperatureLow) / 2}
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



// REMEMBER TO USE ATTRIBUTION LINK //
const newsAPIKey = '181d29365cb24d89aa4cf86a3fa61cca'
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=${newsAPIKey}`;
export const getNews = () => {
    return dispatch => {
        axios.get(newsUrl).then(response => {
            const articleData = response.data.articles
            const articles = []
            // get top three articles from news api
            for (let i = 0; i < 5; i++) {
                articles.push(articleData[i])
            }
            dispatch({
                type: 'GET_NEWS',
                articles
            })
        })
    }
}







const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})


export default store
