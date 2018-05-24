import React, { Component } from 'react';
import styled from 'styled-components';

import Form from './Components/Form/Form';
import Badges from './Components/Badges/Badges';

import './App.css';

const Wrapper = styled.div`
  font-family: 'Avenir';
  max-width: 1000px;
  margin: auto;
  font-size: 16px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      badge: {
        firstName: '',
        lastName: '',
        email: '',
        birthPlace: '',
        phone: '',
        food: '',
        info: ''
      },
      badges: [],
      validated: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  validate = obj => {
    for (let item in obj) {
      if (obj[item].length < 3) {
        this.setState({
          validated: false
        });
        return false;
      }
    }
    this.setState({
      validated: true
    });
    return true;
  }

  clearForm = () => {
    for (let item in this.state.badge) {
      this.setState(prevState => ({
        badge: {
          ...prevState.badge,
          [item]: ''
        }
      }));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.validated) {
      this.setState(
        prevState => ({
          badges: [...prevState.badges, this.state.badge],
          validated: false
        })
      );
      this.clearForm();
    }
  }

  onInputChange = (name, value) => {
    this.setState(
      // change state
      prevState => (
        // if name is not phone, and if Number(value) is a number update phone
        name !== 'phone' ?
          { badge: { ...prevState.badge, [name]: value } } :
          !isNaN(Number(value)) ?
            { badge: { ...prevState.badge, [name]: value } } : null
      ),
      // callback function to run after the state has been changed
      () => this.validate(this.state.badge)
    );
  }

  render() {
    return (
      <Wrapper>
        <Form
          handleSubmit={this.handleSubmit}
          onInputChange={this.onInputChange}
          badge={this.state.badge}
          active={this.state.validated}
        />
        <Badges data={this.state.badges} />
      </Wrapper>
    )
  }
}

export default App;