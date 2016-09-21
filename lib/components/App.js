// LIVE CODING PART

import React, { Component } from 'react';
import scoreWord from './CalculateScore';

class Application extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      words: []
    };
  }

  handleInput(e) {
    const userWord = e.target.value;
    this.setState({ inputValue: userWord });
  }

  clearInput() {
    this.setState({ inputValue: '' });
  }

  submitWord() {
    this.setState({ words: this.state.words.concat(this.state.inputValue)});
    this.clearInput();
  }

  render() {
    return (
      <section>
        <h1>Scrabble</h1>
        <input
          type='text'
          placeholder='word'
          onChange={this.handleInput.bind(this)}
          value={this.state.inputValue}
        />
        <h3>Score: {scoreWord(this.state.inputValue)}</h3>
        <button
          onClick={this.clearInput.bind(this)}>
          Clear
        </button>
        <button
          onClick={this.submitWord.bind(this)}>
          Submit
        </button>
      </section>
    );
  }
}

export default Application;
