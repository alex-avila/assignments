import React from 'react';

const withLoading = (WrappedComponent, props) => {
    return function(props) {
        if (props.isLoading) {
            return <div className="loader">Loading... </div>
        } else {
            return <WrappedComponent color={props.color} />
        }
    }
}

export default withLoading;