import chai from 'chai';
import reduce from '../src/reduce.js';

describe('test reduce.js', function() {

  const similarObjects = [{"name": "cat"}, {"name": "dog"}, {"name": "bird"}];

  describe('Testing normal behaviour', function() {

    it('Basic happy case 1: Count objects in an Array', function() {
      const expectedResult = similarObjects.length;

      const result = reduce(similarObjects, (sum, animal) => sum + 1, 0);

      chai.expect(result).to.equal(expectedResult);
    });

    it('Basic happy case 2: collect values by key', function() {
      const expectedResult = { '1': ['a', 'd', 'c'], '2': ['b'], '3': ['e'] };

      const result = reduce({ 'a': 1, 'b': 2, 'e': 3, 'd': 1, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
      }, {})

      chai.expect(result).to.deep.equal(expectedResult);
    });

  });
});
