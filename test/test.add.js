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

      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 2: should return 1 when given 2.0 and -1.0 as params.', function() {
      const firstOperand = -1.0;
      const secondOperand = 2.0;
      const expectedResult = 1;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 3: should return 0.00000000000000002 when given 0.00000000000000001 as both params.', function() {
      const firstOperand = 0.00000000000000001;
      const secondOperand = 0.00000000000000001;
      const expectedResult = 0.00000000000000002;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 4: should return 0 when given +0 and -0.', function() {
      const firstOperand = 0;
      const secondOperand = -0;
      const expectedResult = 0;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 5: adds together three numbers', function() {
      const firstOperand = 3;
      const secondOperand = 7;
      const thirdOperand = 11;
      const expectedResult = 21;

      const result = add(firstOperand, secondOperand, thirdOperand);
      
      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 6: adds to max safe integer', function() {
      const operand1 = 9007199254740991;
      const operand2 = 3;
      const operand3 = 2000;
      const operand4 = -100;

      const expectedResult1 = 9007199254740994;
      const expectedResult2 = 9007199254742991;
      const expectedResult3 = 9007199254740891;
      const expectedResult4 = 0;
      const expectedResult5 = -9007199254740991;

      const result1 = add(operand1, operand2);
      const result2 = add(operand1, operand3);
      const result3 = add(operand1, operand4);
      const result4 = add(operand1, -operand1);
      const result5 = add(operand1, -2*operand1);
      
      chai.expect(result1).to.equal(expectedResult1);
      chai.expect(result2).to.equal(expectedResult2);
      chai.expect(result3).to.equal(expectedResult3);
      chai.expect(result4).to.equal(expectedResult4);
      chai.expect(result5).to.equal(expectedResult5);
    });

  });

  describe('Most common error cases', function() {
    
    it('Operand error 1: NaN as the other operand should return NaN', function() {
      const firstOperand = NaN;
      const secondOperand = 10;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 2: Adding number 10 to String "5" should return NaN', function() {
      const firstOperand = "5";
      const secondOperand = 10;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 3: Adding number 10 to null (= explicit empty value) should return 10', function() {
      const firstOperand = 10;
      const secondOperand = null;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.equal(10);
    });

    it('Operand error 4: Adding number 10 to undefined should return undefined', function() {
      const firstOperand = 10;
      const secondOperand = undefined;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.undefined;
    });

    it('Operand error 5: Adding undefined to undefined should return undefined', function() {
      const firstOperand = undefined;
      const secondOperand = undefined;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.undefined;
    });

    it('Operand error 6: Adding null to null should return null', function() {
      const firstOperand = null;
      const secondOperand = null;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.null;
    });

    it('Operand error 7: Adding String to String should return NaN', function() {
      const firstOperand = "10";
      const secondOperand = "-1";

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 8: Adding true to true should return NaN', function() {
      const firstOperand = true;
      const secondOperand = true;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 9: Adding Object to Object should return NaN', function() {
      const firstOperand = {"val": 1};
      const secondOperand = {"val": -15};
      const thirdOperand = {"val": 3};

      const result = add(firstOperand, secondOperand, thirdOperand);
      chai.expect(result).to.be.NaN;
    });

    it('Operand error 10: Adding NaN to NaN should return NaN', function() {
      const firstOperand = NaN;
      const secondOperand = NaN;

      const result = add(firstOperand, secondOperand);
      chai.expect(result).to.be.NaN;
    });
  });
});
