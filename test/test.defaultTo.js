import chai from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('test defaultTo.js', function() {

  describe('Testing normal behaviour', function() {

    const okVal1 = 1;
    const okVal2 = "cat";
    const okVal3 = ["squirrel squirrelton"];
    const okVal4 = {"my simple key number 1": "my simple value 1"};
    const okVal5 = {"my simple key number 2": ["my complex value 1"]};

    const badVal1 = null;
    const badVal2 = undefined;
    const badVal3 = NaN;

    it('Basic happy case 1: Okays with ok defaults should result in original ok value', function() {
      const result_Ok_1_Ok_3 = defaultTo(okVal1, okVal3);
      const result_Ok_2_Ok_4 = defaultTo(okVal2, okVal4);
      const result_Ok_3_Ok_5 = defaultTo(okVal3, okVal5);

      // Check that correct reference is returned:
      chai.expect(result_Ok_1_Ok_3).to.equal(okVal1);
      chai.expect(result_Ok_2_Ok_4).to.equal(okVal2);
      chai.expect(result_Ok_3_Ok_5).to.equal(okVal3);

      // Check that values were not edited:
      chai.expect(result_Ok_1_Ok_3).to.deep.equal(okVal1);
      chai.expect(result_Ok_2_Ok_4).to.deep.equal(okVal2);
      chai.expect(result_Ok_3_Ok_5).to.deep.equal(okVal3);
    });

    it('Basic happy case 2: Okays with bad defaults should result in original ok value', function() {
      const result_Ok_4_bad_1 = defaultTo(okVal4, badVal1);
      const result_Ok_5_bad_2 = defaultTo(okVal5, badVal2);
      const result_Ok_1_bad_3 = defaultTo(okVal1, badVal3);

      // Check that correct reference is returned:
      chai.expect(result_Ok_4_bad_1).to.equal(okVal4);
      chai.expect(result_Ok_5_bad_2).to.equal(okVal5);
      chai.expect(result_Ok_1_bad_3).to.equal(okVal1);

      // Check that values were not edited:
      chai.expect(result_Ok_4_bad_1).to.deep.equal(okVal4);
      chai.expect(result_Ok_5_bad_2).to.deep.equal(okVal5);
      chai.expect(result_Ok_1_bad_3).to.deep.equal(okVal1);
    });

    it('Basic happy case 3: Bad values with ok default values should return defaults', function() {
      const result_bad_1_ok_1 = defaultTo(badVal1, okVal1); // null and 1
      const result_bad_2_ok_2 = defaultTo(badVal2, okVal2); // undefined and "cat"
      const result_bad_3_ok_3 = defaultTo(badVal3, okVal3); // NaN and an Array

      // Check that correct reference is returned:
      chai.expect(result_bad_1_ok_1).to.equal(okVal1);
      chai.expect(result_bad_2_ok_2).to.equal(okVal2);
      chai.expect(result_bad_3_ok_3).to.equal(okVal3);

      // Check that values were not edited:
      chai.expect(result_bad_1_ok_1).to.deep.equal(okVal1);
      chai.expect(result_bad_2_ok_2).to.deep.equal(okVal2);
      chai.expect(result_bad_3_ok_3).to.deep.equal(okVal3);
    });

    it('Basic sad case 2: Bad values with bad okays should result in bad default value', function() {
      const result_bad_1_bad_3 = defaultTo(badVal1, badVal3);
      const result_bad_2_bad_1 = defaultTo(badVal2, badVal1);
      const result_bad_3_bad_2 = defaultTo(badVal3, badVal2);

      // Check that correct Error is raised:
      chai.expect(result_bad_1_bad_3).to.be.NaN;
      chai.expect(result_bad_2_bad_1).to.be.null;
      chai.expect(result_bad_3_bad_2).to.be.undefined;
    });

  });
});