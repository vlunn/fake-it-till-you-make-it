import chai from 'chai';
import add from '../src/add.js';

/**
 * Happy cases include:
 *  - different number types: integers, floats
 *  - limit values: positive and negative numbers, zero
 * -> happy cases should always return correct sum.
 *  
 * Most relevant exception cases:
 *  - number overflow and underflow
 * -> Expected behaviour: ???
 * 
 * Most useful/common error cases:
 *  - operand errors:
 *     - data type does not match
 *     - wrong data type: String, object
 *     - missing(?) operands: null/undefined
 * -> Expected behaviour: ???
 * 
 * Other considerations:
 *  - Does the operand order matter?
 */

describe('Test add.js', function() {
  
  describe('Happy cases: returns the sum of two given numbers', function() {
    
    it('Basic happy case 1: should return 3 when given 2 and 1 as params.', function() {
      const firstOperand = 1;
      const secondOperand = 2;
      const expectedResult = 3;

      const result = add(firstOperand, secondOperand);

      chai.expect(result).to.equal(expectedResult)
    });

    it('Basic happy case 2: should return 1 when given 2.0 and -1.0 as params.', function() {
      const firstOperand = -1.0;
      const secondOperand = 2.0;
      const expectedResult = 1;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(expectedResult)
    });

    it('Basic happy case 3: should return -1 when given 0 and -1.0 as params.', function() {
      const firstOperand = -1.0;
      const secondOperand = 0;
      const expectedResult = -1;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(expectedResult)
    });

  });

  describe('Most common error cases', function() {
    
    it('Operand error 1: NaN as the other operand', function() {
      const firstOperand = Number.NaN;
      const secondOperand = 10;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 1: Adding number 10 to String "5" should return NaN', function() {
      const firstOperand = "5";
      const secondOperand = 10;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });
  });
});
