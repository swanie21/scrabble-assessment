const assert = require('chai').assert;
const CalculateScore = require('../lib/components/CalculateScore');

describe('test bundle', function () {
  it('should work', function () {
    assert(true);
    });
  });

describe('scoreWord function', function () {
  it('should be a function', function () {
    const score = new CalculateScore();
    assert.isFunction(score.scoreWord);
  });

  it('should take a word and return the total score of the word', function () {
    const score = new CalculateScore();
    var word = score.scoreWord('heyyyyyyy');
    assert.equal(word, 33);
  });

  it('should return 8 with the word hello', function () {
    const score = new CalculateScore();
    var word = score.scoreWord('hello');
    assert.equal(word, 8);
  });

  it('should return 0 if it is an empty string or non-string', function () {
    const score = new CalculateScore();
    var word = score.scoreWord('');
    assert.equal(word, 0);
  });

  it('should exclude whitespace bafore and after the word', function () {
    const score = new CalculateScore();
    var word = score.scoreWord('   hello  ');
    assert.equal(word, 8);
  });

  it('should take an optional second argument for a nultiplier', function () {
    const score = new CalculateScore();
    var word = score.scoreWord('hello', 3);
    assert.equal(word, 24);
  });
});
