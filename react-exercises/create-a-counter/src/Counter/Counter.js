import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}

export default Counter;