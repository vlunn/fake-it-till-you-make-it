import chai from 'chai';
import map from '../src/map.js';

describe('test map.js', function() {

  const animalObjects = [{"name": "cat"}, {"name": "dog"}, {"name": "bird"}];
  const repeatingAnimals = [{"name": "cat"}, {"name": "dog"}, {"name": "cat"}, {"name": "bird"}, {"name": "wolf"}, {"name": "bird"}];
  const numberArray = [4, 8, null, undefined, "", 2];
  const animalsInObject = {
    "cat": {"name": "cat"}, 
    "dog": {"name": "dog"},
    "bird": {"name": "bird"}
  }
  
  const pickName = (animal) => animal.name;
  function square(n) { return n * n };

  describe('Testing normal behaviour', function() {

    it('Basic happy case 1: maps arrays by the given iteratee function', function() {
      const expectedResult1 = animalObjects.map(pickName);
      const expectedResult2 = numberArray.map(square);
      const expectedResult3 = repeatingAnimals.map(pickName);

      const result1 = map(animalObjects, pickName);  // [ 'cat', 'dog', 'bird' ]
      const result2 = map(numberArray, square);      // [ 16, 64, 0, NaN, 0, 4 ]
      const result3 = map(repeatingAnimals, pickName);

      chai.expect(result1).to.deep.equal(expectedResult1);
      chai.expect(result2).to.deep.equal(expectedResult2);
      chai.expect(result3).to.deep.equal(expectedResult3);
    });

    it('Basic error case 1: empty iterables', function() {
      const expectedResult = [];

      const result1 = map([], pickName);
      const result2 = map([], square);
      const result3 = map(null, pickName);
      const result4 = map(null, square);
      const result5 = map(undefined, pickName);
      const result6 = map(undefined, square);

      chai.expect(result1).to.deep.equal(expectedResult);
      chai.expect(result2).to.deep.equal(expectedResult);
      chai.expect(result3).to.deep.equal(expectedResult);
      chai.expect(result4).to.deep.equal(expectedResult);
      chai.expect(result5).to.deep.equal(expectedResult);
      chai.expect(result6).to.deep.equal(expectedResult);
    });

  });
});