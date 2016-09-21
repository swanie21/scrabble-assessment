import React, { Component } from 'react';

const InputFields = (props) => {
  const { inputValue, multiplier, handleInput, handleMultiplier } = props;

  return (
    <section>
      <input
        type='text'
        placeholder='Enter word'
        onChange={handleInput}
        value={inputValue}
      />
      <input
        type='number'
        placeholder='Enter multiplier'
        onChange={handleMultiplier}
        value={multiplier}
      />
    </section>
  );
}

export default InputFields;
