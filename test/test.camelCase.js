import chai from 'chai';
import camelCase from '../src/camelCase.js';

/**
 * Happy cases include:
 *  - Pretty much any kind of strings
 *  
 * Most relevant exception cases:
 *  - other data types
 * 
 * Most useful/common error cases:
 * 
 * Other considerations:
 */

describe('Test camelCase.js', function() {
  
  describe('Happy cases: Function is given a string', function() {
    
    it('Basic happy case 1: should work with all lowercase string', function() {
      const teststring = "soittakaa paranoid     jookosta";
      const result = camelCase(teststring);
      const expectedResult = "soittakaaParanoidJookosta";
      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 2: should work with random upper case letters', function() {
        const teststring = "SOittakaa paraNoid     jookoSTA";
        const result = camelCase(teststring);
        const expectedResult = "soittakaaParanoidJookosta";
  
        chai.expect(result).to.equal(expectedResult);
      });

      it('Basic happy case 3: should work with "-" & "_"', function() {
        const teststring = "soittakaa--__--_ paranoid  __--__   jookosta--";
        const result = camelCase(teststring);
        const expectedResult = "soittakaaParanoidJookosta";
  
        chai.expect(result).to.equal(expectedResult);
      });  
  });

  describe('Most common error cases', function() {
    
    it('Should return float as untouched string', function() {
        const teststring = 42.42;
        const result = camelCase(teststring);
        const expectedResult = "42.42";

        chai.expect(result).to.equal(expectedResult);
    });

    it('Should return NaN as NaN', function() {
        const teststring = Number.NaN;
        const result = camelCase(teststring);
        chai.expect(result).to.be.NaN;
    });
  });
});
