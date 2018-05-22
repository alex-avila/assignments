import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledBox = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    /* box-shadow: 
        0 2px 15px -5px #aaa,
        0 20px 70px -20px ${props => props.shadow}; */
    transform-style: preserve-3d;
    transition: transform 1s;
`;

const BoxSide = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 50%;
    /* Give front of box selected color and give back a white color */
    background: 
        ${props => props.front ?
            props.bg :
            'linear-gradient(135deg, #f1f2f6 -100%, #d1a2c6)'
        }
    ;
    /* Rotate back of card so that when we rotate the card it shows the back */
    transform: 
        ${props => props.front ?
            null :
            'rotateY(180deg)'
        }
    ;
    box-shadow: 
        0 2px 15px -5px #aaa,
        0 20px 70px -20px ${props => props.shadow};
`;


class Box extends Component {
    constructor() {
        super();
        this.state = {
            color: 'linear-gradient(135deg, #ffffff, #f1f2f6)',
            shadowColor: '#f1f2f6',
            flipped: false
        }

        this.colors = {
            white: 'linear-gradient(135deg, #ffffff, #f1f2f6)',
            blue: 'linear-gradient(135deg, #70a1ff, #5352ed)',
            red: 'linear-gradient(135deg, #ff6348, #ff4757)',
            pink: 'linear-gradient(135deg, #ff9ff3, #f368e0)',
            yellow: 'linear-gradient(135deg, #eccc68, #ffa502)',
            green: 'linear-gradient(135deg, #7bed9f, #2ed573)'
        }

        this.handleKeydown = this.handleKeydown.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleKeydown(e) {
        const { colors } = this
        const { key } = e;
        switch (key.toLowerCase()) {
            case 'b':
                this.changeColor(colors.blue)
                break;
            case 'r':
                this.changeColor(colors.red)
                break;
            case 'p':
                this.changeColor(colors.pink)
                break;
            case 'y':
                this.changeColor(colors.yellow)
                break;
            case 'g':
                this.changeColor(colors.green)
                break;
            default:
                this.changeColor(colors.white)
        }
    }

    changeColor(color) {
        this.setState({
            color,
            shadowColor: color.slice(-8, -1)
        })
    }

    handleClick() {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }));
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    // 

    render() {
        return (
            <StyledBox
                onClick={this.handleClick}
                style={this.state.flipped ? { transform: 'rotateY(-180deg)' } : null}
            >
                <BoxSide shadow={this.state.shadowColor}/>
                <BoxSide bg={this.state.color} front shadow={this.state.shadowColor} />
            </StyledBox>
        );
    }
}

export default Box;