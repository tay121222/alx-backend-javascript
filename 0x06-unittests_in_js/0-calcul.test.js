const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when both numbers are rounded to 1 and 3 respectively', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when the first number is rounded to 1 and the second number is rounded to 4', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when the first number is rounded to 1 and the second number is rounded to 4', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when the first number is rounded to 2 and the second number is rounded to 4', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 4 when the second number is rounded to 3', function () {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });
  
  it('should return 3 when the second number is rounded to 2', function () {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });
});
