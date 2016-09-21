import React, { Component } from 'react';

const Buttons = (props) => {
  const { handleScore, inputValue, clearInput } = props;

  return (
    <section>
      <button
        disabled={!inputValue}
        onClick={handleScore}>
        Calculate score
      </button>
      <button
        disabled={!inputValue}
        onClick={clearInput}>
        Clear
      </button>
    </section>
  );
}

export default Buttons;
