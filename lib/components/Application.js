import React, { Component } from 'react';
import CalculateScore from './CalculateScore';

class Application extends Component {
  constructor() {
    super();
      this.CalculateScore = new CalculateScore();
      this.state = {
        inputWord: '',
        wordScore: '',
        multiplier: 1,
      };
    }

  handleInput(e) {
    const currentWord = e.target.value;
    this.setState({ inputWord: currentWord });
  }

  handleMultiplier(e) {
    const newMultiplier = e.target.value;
    this.setState({ multiplier: newMultiplier });
  }

  handleScore() {
    const score = this.CalculateScore.scoreWord(this.state.inputWord, this.state.multiplier);
    this.setState({ wordScore: score });
  }

  render() {
    return (
      <section>
        <h1>Scrabble</h1>
        <h3>Word: {this.state.inputWord}</h3>
        <h3>Score: {this.state.wordScore}</h3>
        <input
          type='text'
          placeholder='Enter word'
          onChange={this.handleInput.bind(this)}
        />
        <input
          type='number'
          placeholder='Enter multiplier'
          onChange={this.handleMultiplier.bind(this)}
        />
        <button
          onClick={this.handleScore.bind(this)}
        >
          Calculate score
        </button>
      </section>
    );
  }
}

export default Application;
