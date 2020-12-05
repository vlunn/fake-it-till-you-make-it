import chai from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('test isEmpty.js', function() {


  describe('Testing normal behaviour: types without length property', function() {

    it('Basic String case 1: Classifies Numbers empty', function() {
      const number1 = 3;
      const number2 = -3;
      const number3 = NaN;

      const result1 = isEmpty(number1);
      const result2 = isEmpty(number2);
      const result3 = isEmpty(number3);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
      chai.expect(result3).to.equal(true);
    });

    it('Basic String case 2: Classifies Booleans empty', function() {
      const bool1 = true;
      const bool2 = false;

      const result1 = isEmpty(bool1);
      const result2 = isEmpty(bool2);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
    });

  });

  describe('Testing normal behaviour: types with a length-property', function() {

    it('Basic String case 1: Recognizes non-empty strings', function() {
      const testVal1 = '""';
      const testVal2 = "''";
      const testVal3 = '-';
      const testVal4 = " ";
      const testVal5 = 'soittakaa paranoid';
      const testVal6 = 'soittakaa paranoid!';
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);
      const result3 = isEmpty(testVal3);
      const result4 = isEmpty(testVal4);
      const result5 = isEmpty(testVal5);
      const result6 = isEmpty(testVal6);

      chai.expect(result1).to.equal(false);
      chai.expect(result2).to.equal(false);
      chai.expect(result3).to.equal(false);
      chai.expect(result4).to.equal(false);
      chai.expect(result5).to.equal(false);
      chai.expect(result6).to.equal(false);
    });

    it('Basic String case 2: Recognizes when a String is empty', function() {
      const testVal1 = '';
      const testVal2 = "";
      const testVal3 = String();
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);
      const result3 = isEmpty(testVal3);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
      chai.expect(result3).to.equal(true);
    });

    it('Basic Array case 1: Recognizes non-empty Arrays', function() {
      const testVal1 = [''];
      const testVal2 = [" "];
      const testVal3 = [{}];
      const testVal4 = ["muikku"];
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);
      const result3 = isEmpty(testVal3);
      const result4 = isEmpty(testVal4);
      
      chai.expect(result1).to.equal(false);
      chai.expect(result2).to.equal(false);
      chai.expect(result3).to.equal(false);
      chai.expect(result4).to.equal(false);
    });

    it('Basic Array case 2: Recognizes when an Array is empty', function() {
      const testVal1 = [];
      const testVal2 = new Array();
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
    });

    it('Basic Object case 1: Recognizes non-empty Objects', function() {
      const testVal1 = {"my val": null};
      const testVal2 = {"my val": undefined};
      const testVal3 = {"my val": "turska"};
      const testVal4 = {"my val": {}};
      const testVal5 = new Object();
      testVal5["my key"] = [];
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);
      const result3 = isEmpty(testVal3);
      const result4 = isEmpty(testVal4);
      const result5 = isEmpty(testVal5);
      
      chai.expect(result1).to.equal(false);
      chai.expect(result2).to.equal(false);
      chai.expect(result3).to.equal(false);
      chai.expect(result4).to.equal(false);
      chai.expect(result5).to.equal(false);
    });

    it('Basic Object case 2: Recognizes when an Object is empty', function() {
      const testVal1 = {};
      const testVal2 = new Object();
      
      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
    });

    it('Basic Set case 1: Recognizes non-empty Sets', function() {
      const mySet = new Set()
      mySet.add(1);
      mySet.add(5);
      mySet.add(5);

      const result = isEmpty(mySet);

      chai.expect(result).to.equal(false);
    });

    it('Basic Set case 2: Recognizes when a Set is empty', function() {
      const mySet = new Set()

      const result = isEmpty(mySet);

      chai.expect(result).to.equal(true);
    });

  });

  describe('Testing normal behaviour: empty types', function() {

    it('Basic String case 1: Recognizes empty types', function() {
      const testVal1 = null;
      const testVal2 = undefined;
      const testVal3 = NaN;

      const result1 = isEmpty(testVal1);
      const result2 = isEmpty(testVal2);
      const result3 = isEmpty(testVal3);

      chai.expect(result1).to.equal(true);
      chai.expect(result2).to.equal(true);
      chai.expect(result3).to.equal(true);
    });
  });
});
