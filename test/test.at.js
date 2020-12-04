import chai from 'chai';
import at from '../src/at.js';

/**
 * Happy cases include:
 *  - Desired path is in object
 *  
 * Most relevant exception cases:
 *  - trying to find something that's not in array
 * 
 * Most useful/common error cases:
 * 
 * Other considerations:
 */

describe('Test at.js', function() {
  
  describe('Happy cases: Desired path is in object', function() {
    
    it('Basic happy case 1: should match example given in specs', function() {
      const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
      const result = at(object, ['a[0].b.c', 'a[1]']);
      const expectedResult = [3, 4];

      chai.expect(result).to.eql(expectedResult);
    });
  });

  describe('Most common error cases', function() {
    
    it('Trying to get value outside of object', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object, ['a[0].b.c', 'a[4]']);
        const expectedResult = [3, undefined];

        chai.expect(result).to.eql(expectedResult);
    });
  });
});
