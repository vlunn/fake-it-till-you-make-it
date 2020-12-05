import chai, { use } from 'chai';
import filter from '../src/filter.js';

describe('test filter.js', function() {

  // Return a new array that contains all those elements from a parameter array 
  // that return true for the given predicate function
  describe('Testing normal behaviour', function() {

    const activeUser = { 'user': 'barney', 'active': true };
    const inactiveUser = { 'user': 'fred', 'active': false };
    const troubleUser = { 'user': 'lord troubleton' };
    const complexUser1 = {
      'user': 'Fancy McNancy',
      'savings-by-month': [100, 2.00, -50.33, 600, 0, null, 10]
    };
    const complexUser2 = {
      'user': 'Not-So-Fancy McNancy',
      'savings-by-month': [0, 0, 0, 20, -50, null, 10]
    };

    const simplePredicate = ({active}) => active;
    const complexPredicate = (user) => 
        user['savings-by-month'] !== undefined ? 
          user['savings-by-month'].reduce((save, sum) => save + sum, 0) > 300 : 
          false;

    it('Basic happy case 1: finds elements that should return true for simple predicate', function() {
      const users = [ activeUser, inactiveUser ];

      const result = filter(users, simplePredicate);

      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(1);

      chai.expect(result[0]).to.equal(activeUser);
      chai.expect(result[0]).to.deep.equal(activeUser);
    });

    it('Basic happy case 2: returns also duplicates', function() {
      
      const activeUser1 = { 'user': null, 'active': true };
      const activeUser2 = { 'user': undefined, 'active': true };
      const activeUser3 = { 'active': true };
      const activeUser4 = { 'active': true };

      const inactiveUser = { 'user': 'fred', 'active': false };
      
      const users = [
        inactiveUser,
        activeUser2,
        activeUser1,
        activeUser1,
        inactiveUser,
        activeUser4,
        activeUser3,
        inactiveUser
      ];

      const expectedResult = [
        activeUser2,
        activeUser1,
        activeUser1,
        activeUser4,
        activeUser3
      ];

      const result = filter(users, simplePredicate);

      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(expectedResult.length);

      // References and values should match:
      for (let i = 0; i < result.length; i++) {
        chai.expect(result[i]).to.equal(expectedResult[i]);
        chai.expect(result[i]).to.deep.equal(expectedResult[i]);
      }
    });

    it('Basic happy case 3: finds elements that should return true for a complex predicate', function() {
      const users = [ complexUser2, activeUser, complexUser1, inactiveUser ];
      
      const result = filter(users, complexPredicate);

      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(1);

      chai.expect(result[0]).to.equal(complexUser1);
      chai.expect(result[0]).to.deep.equal(complexUser1);
    });

    it('Basic happy case 4: returns empty Array for an empty Array with simple predicate', function() {
      const users = [];

      const resultSimple = filter(users, simplePredicate);
      
      chai.expect(resultSimple).to.be.an('array').that.is.empty;
    });

    it('Basic happy case 5: returns empty Array for an empty Array with complex predicate', function() {
      const users = [];

      const resultComplex = filter(users, complexPredicate);
      
      chai.expect(resultComplex).to.be.an('array').that.is.empty;
    });
  
    it('Basic error case 1: should ignore elements that predicate can\'t be evaluated for', function() {
      
      const users = [ activeUser, troubleUser, inactiveUser, activeUser ];
      const expectedResult = [ activeUser, activeUser ];

      const result = filter(users, simplePredicate);

      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(2);

      // References and values should match:
      for (let i = 0; i < result.length; i++) {
        chai.expect(result[i]).to.equal(expectedResult[i]);
        chai.expect(result[i]).to.deep.equal(expectedResult[i]);
      }
    });
  
    it('Basic error case 2: should throw exception when predicate evaluated for null', function() {
      const users = [ activeUser, troubleUser, null, inactiveUser, activeUser ];

      const result = () => filter(users, ({ active }) => active);

      chai.expect(result).to.throw(Error);
    });
  
    it('Basic error case 3: should throw exception when predicate evaluated for undefined', function() {
      const users = [ activeUser, undefined, inactiveUser, activeUser ];

      const result = () => filter(users, simplePredicate);

      chai.expect(result).to.throw(Error);
    });
  
    it('Basic error case 4: should throw exception when simple predicate evaluated for a NaN element', function() {
      const users = [ activeUser, NaN, inactiveUser, activeUser ];

      const result = () => filter(users, simplePredicate);

      chai.expect(result).to.throw(Error);
    });

  });
});