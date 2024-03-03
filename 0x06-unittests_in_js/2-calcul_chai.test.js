const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('should return the sum of rounded numbers', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return the difference of rounded numbers', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return the division of rounded numbers', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
