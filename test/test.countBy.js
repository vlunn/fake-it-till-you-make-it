import chai from 'chai';
import countBy from '../src/countBy.js';

describe('test countBy.js', function() {

  describe('Testing normal behaviour', function() {

    // Counts the occurence of different values for a given attibute from an iterable.
    // Returns a new object containing the different values as a key 
    it('Basic happy case 1: Counts active and inactive users from Array of user Objects-', function() {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
    
      const expectedResult = { 'true': 2, 'false': 1 }

      const result = countBy(users, value => value.active);

      chai.expect(result).to.equal(expectedResult);
    });

  });
});