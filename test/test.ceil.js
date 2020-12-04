import chai from 'chai';
import ceil from '../src/ceil.js';

/**
 * Happy cases include:
 *  - Function is given any kind of numbers
 *  
 * Most relevant exception cases:
 *  - Trying to ceil something other than numbers
 * 
 * Most useful/common error cases:
 * 
 * Other considerations:
 */

describe('Test ceil.js', function() {
  
  describe('Happy cases: function is given some sort of numbers', function() {
    
    it('Basic happy case 1: rounding with default precision', function() {
      const input = 4.12
      const result = ceil(input);
      const expectedResult = 5;

      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 2: rounding with large precision', function() {
        const input = 4.0000000000002
        const result = ceil(input, 10);
        const expectedResult = 4.0000000001;
  
        chai.expect(result).to.equal(expectedResult);
      });

      it('Basic happy case 3: rounding with large negative precision', function() {
        const input = 4000000000004
        const result = ceil(input, -10);
        const expectedResult = 4010000000000;
  
        chai.expect(result).to.equal(expectedResult);
      });
  });

  describe('Most common error cases', function() {
    
    it('Trying to round a string', function() {
        const input = "apua"
        const result = ceil(input);
        const expectedResult = "apua";
  
        chai.expect(result).to.be.NaN;
    });
  });
});
