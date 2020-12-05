import chai from 'chai';
import divide from '../src/divide.js';

describe('test divide.js', function() {

  describe('Testing normal behaviour', function() {

    it('Basic happy case 1: divides 10 by 2, should give 5', function() {
      const divident = 10;
      const divider = 2;
      const result = divide(divident, divider)
      chai.expect(result).to.equal(5);
    });

    it('Basic happy case 2: divides -1 by 2, should give -0.5', function() {
      const divident = -1;
      const divider = 2;
      const result = divide(divident, divider)
      chai.expect(result).to.equal(-0.5);
    });

    it('Basic happy case 3: divides -0 by 2000, should give -0', function() {
      const divident = -0;
      const divider = 2000;
      const result = divide(divident, divider)
      chai.expect(result).to.equal(-0);
    });

    it('Basic happy case 4: divides -50 by -0.5, should give 100', function() {
      const divident = -50;
      const divider = -0.5;
      const result = divide(divident, divider)
      chai.expect(result).to.equal(-0);
    });

    it('Basic happy case 5: divides Number 100 by null, returns Number 100', function() {
      const divident = 100;
      const divider = null;
      const result = divide(divident, divider)
      chai.expect(result).to.equal(divident);
    });

    it('Basic happy case 6: will not divide 10 by 0, throws an error', function() {
      const divident = 10;
      const divider = 0;
      const result = divide(divident, divider)
      chai.expect(result).to.throw('Error')
    });

    it('Basic happy case 7: will not divide String "10" by Number 10, returns NaN', function() {
      const divident = "10";
      const divider = 10;
      const result = divide(divident, divider)
      chai.expect(result).to.be.NaN;
    });

    it('Basic happy case 8: will not divide Number 100 by String "-2", returns NaN', function() {
      const divident = 100;
      const divider = "-2";
      const result = divide(divident, divider)
      chai.expect(result).to.be.NaN;
    });

    it('Basic happy case 9: will not divide Number 100 by undefined, returns undefined', function() {
      throw new Error('Not implemented');
    });

    it('Basic happy case 10: will not divide NaN by 2, returns NaN', function() {
      throw new Error('Not implemented');
    });

    it('Basic happy case 11: divides Number 100 by Infinity, returns 0', function() {
      throw new Error('Not implemented');
    });

    it('Basic happy case 12: divides Number 100 by -Infinity, returns 0', function() {
      throw new Error('Not implemented');
    });

  });

});