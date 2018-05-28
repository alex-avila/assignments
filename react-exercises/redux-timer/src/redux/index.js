import { createStore } from 'redux'

const initialState = {
    time: 0,
    laps: [],
    play: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAY_PAUSE':
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


export const playPause = () => {
    return {
        type: 'PLAY_PAUSE'
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
    count += 0.1
    return {
        type: 'UPDATE_TIME',
        time: count.toFixed(1)
    }
}

// run an action every second to update time
let interval;
const startInterval = time => {
    interval = setInterval(() => store.dispatch(updateTime(time)), 100)
}





export const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})