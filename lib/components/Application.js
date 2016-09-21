import React, { Component } from 'react';
import scoreWord from './CalculateScore';
import InputFields from './InputFields';
import Buttons from './Buttons';

class Application extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      multiplier: 1,
      wordScore: ''
    };
  }

  handleInput(e) {
    const userWord = e.target.value;
    this.setState({ inputValue: userWord });
  }

  handleMultiplier(e) {
    const newMultiplier = e.target.value;
    this.setState({ multiplier: newMultiplier });
  }

  handleScore() {
    const score = scoreWord(this.state.inputValue, this.state.multiplier);
    this.setState({ wordScore: score });
  }

  clearInput() {
    this.setState({ inputValue: '', multiplier: 1 });
  }

  render() {
    return (
      <section>
      <h1>Scrabble Score</h1>
      <InputFields
        inputValue={this.state.inputValue}
        multiplier={this.state.multiplier}
        handleInput={this.handleInput.bind(this)}
        handleMultiplier={this.handleMultiplier.bind(this)}
      />
      <Buttons
        inputValue={this.state.inputValue}
        handleScore={this.handleScore.bind(this)}
        clearInput={this.clearInput.bind(this)}
      />
      <h3>Score: {scoreWord(this.state.inputValue)}</h3>
      </section>
    );
  }
}

export default Application;
