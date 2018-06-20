import React, { Component } from 'react';

import Button from './Button'

import './QualityGetter.css'

class QualityGetter extends Component {
    render() {
        const { handleQRes, len, id } = this.props
        return (
            <div className="quality-getter">
                <Button
                    onClick={() => handleQRes(len, id, 1)}
                >
                    1
                </Button>
                <Button
                    onClick={() => handleQRes(len, id, 2)}
                >
                    2
                </Button>
                <Button
                    onClick={() => handleQRes(len, id, 3)}
                >
                    3
                </Button>
                <Button
                    onClick={() => handleQRes(len, id, 4)}
                >
                    4
                </Button>
                <Button
                    onClick={() => handleQRes(len, id, 4)}
                >
                    5
                </Button>
            </div>
        );
    }
}

export default QualityGetter;