import { createStore } from 'redux'

const initialState = {
    time: 0,
    laps: [],
    play: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_TIMER':
            !state.play ? startInterval(state.time) : clearInterval(interval)
            return {
                ...state,
                play: !state.play
            }
        case 'UPDATE_TIME':
            return {
                ...state,
                time: action.time
            }
        case 'RESET':
            count = 0
            return {
                ...state,
                time: 0
            }
        case 'ADD_LAP':
            return {
                ...state,
                laps: [...state.laps, state.time]
            }
        default:
            return state
    }
}


export const startTimer = () => {
    return {
        type: 'START_TIMER'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const addLap = () => {
    return {
        type: 'ADD_LAP'
    }
}


let count = 0;
const updateTime = (time) => {
    // store.dispatch(updateTime(time))
    count++
    return {
        type: 'UPDATE_TIME',
        time: count
    }
}

// run an action every second to update time
let interval;
const startInterval = time => {
    interval = setInterval(() => store.dispatch(updateTime(time)), 1000)
}





export const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})