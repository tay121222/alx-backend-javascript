const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('should return the sum of rounded numbers', function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return the difference of rounded numbers', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return the division of rounded numbers', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
