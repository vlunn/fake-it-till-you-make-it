import chai from 'chai';
import difference from '../src/difference.js';

describe('Test difference.js', function() {
  
  describe('Should return a new Array containing elements that were not referenced in exclusion parameter in occurence order and leave paramers intact', function() {
    
    it('Basic happy case 1: should return [1, 3] when given [1, 2, 3] and [1].', function() {
      const firstOperand = [1, 2, 3];
      const secondOperand = [2];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = [1, 3];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);

      
    });

    it('Basic happy case 2: should return [1] when given [1, 32] and ["1", object, 32].', function() {
      const firstOperand = [1, 32];
      const secondOperand = ["1", {"my_key": "my_value"}, 32];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = [1];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);

      
    });

    it('Basic happy case 3: should return array containing original elements, when given [-1, [0], "1"] and [].', function() {
      const firstOperand = [-1, [0], "1"];
      const secondOperand = [];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = [-1, [0], "1"];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);
      chai.expect(result[1]).to.equal(firstOperand[1]);

      
    });

    it('Basic happy case 4: should return [] when given [] and [-1, 0, "1", undefined].', function() {
      const firstOperand = [];
      const secondOperand = [-1, 0, "1", undefined];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = [];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);

      
    });

    it('Basic happy case 5: should return all members, if no common members.', function() {
      const firstOperand = ["cat", "dog"];
      const secondOperand = [1, 2, 3];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = ["cat", "dog"];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);

      
    });

    it('Basic happy case 6: should return exact members, not copies.', function() {
      const member1 = {"key1": "value1"};
      const member2 = {"key2": "value2"};
      const member3 = {"key3": "value3"};

      const firstOperand = [member1, member2, member3];
      const secondOperand = [member2, member1];

      const deepCopyOfFirst = Array.from(firstOperand);
      const deepCopyOfSecond = Array.from(secondOperand);

      const expectedResult = [member3];

      const result = difference(firstOperand, secondOperand);

      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(secondOperand).to.equal(secondOperand);

      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);
      chai.expect(result[0]).to.equal(member3); // Tarkista myös referenssi

      
    });

    it('Basic happy case 7: should remove equal values only if they have same reference.', function() {
      const member1 = {"key1": "value1"};
      const member2 = {"key2": "value2"};
      const member3 = {"key3": "value3"};

      const member1copy = {"key1": "value1"};
      const member3copy = {"key3": "value3"};

      const firstOperand = [member1, member2, member3];
      const secondOperand = [member3copy, member1copy, member2];

      const result = difference(firstOperand, secondOperand);

      chai.expect(result).to.have.lengthOf(2);  // should have member1 and member3.
      chai.expect(result[0]).to.equal(member1);
      chai.expect(result[1]).to.equal(member3);
    });

  });

  describe('Most common error cases', function() {

    it('Error case 1: Should return all elements, if compare array is undefined', function() {
      const firstOperand = ["cat", "dog", "penguin"];
      const secondOperand = undefined;

      const deepCopyOfFirst = Array.from(firstOperand);

      const expectedResult = ["cat", "dog", "penguin"];

      const result = difference(firstOperand, secondOperand);
      
      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(firstOperand).to.equal(firstOperand);
      chai.expect(firstOperand).to.deep.equal(deepCopyOfFirst);
      chai.expect(secondOperand).to.be.undefined;

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.deep.equal(expectedResult);
    });

    it('Error case 2: Should return an empty Array, if first array is undefined', function() {
      const firstOperand = undefined;
      const secondOperand = ["cat", "dog", "penguin"];

      const deepCopyOfSecond = Array.from(secondOperand);

      const result = difference(firstOperand, secondOperand);
      
      // Tarkistaa, että parametrilistat eivät muutu:
      // a) pitää olla sama referenssi (strict equal)
      // b) pitää olla muuttumaton sisältö (deep equal)

      chai.expect(secondOperand).to.equal(secondOperand);
      chai.expect(secondOperand).to.deep.equal(deepCopyOfSecond);
      chai.expect(firstOperand).to.be.undefined;

      // Lopuksi: tarkista, että sisältö oikea tulostaulukossa
      chai.expect(result).to.be.an('array').that.is.empty;;
    });

    it('Error case 3: Should return all repeating elements, if first array has repeating simple values', function() {
      const firstOperand = ["cat", "dog", "dog", "penguin", "cat"];
      const secondOperand = [1, 2, 3];

      const result = difference(firstOperand, secondOperand);
      
      // Tarkista, että sisältö oikea tulostaulukossa:
      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(firstOperand.length);

      for (let i = 0; i < result.length; i++) {
        // Check that references match to original element references:
        chai.expect(result[i]).to.equal(firstOperand[i]);

        // Check that values are intact:
        chai.expect(result[i]).to.deep.equal(firstOperand[i]);
      };
    });
  
    it('Error case 4: Should return all repeating elements, if first array has repeating complex values', function() {
      const firstOperand = [["dog"], ["cat"], ["dog"], ["penguin"], ["cat"]];
      const secondOperand = ["dog", ["cat"], "penguin"];

      const result = difference(firstOperand, secondOperand);

      // Tarkista, että sisältö oikea tulostaulukossa:
      chai.expect(result).to.be.an('array');
      chai.expect(result).to.have.lengthOf(firstOperand.length);

      for (let i = 0; i < result.length; i++) {
        // Check that references match to original element references:
        chai.expect(result[i]).to.equal(firstOperand[i]);

        // Check that values are intact:
        chai.expect(result[i]).to.deep.equal(firstOperand[i]);
      };
    });
  
  });
});
