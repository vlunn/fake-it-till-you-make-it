import chai from 'chai';
import isDate from '../src/isDate.js';

describe('test isDate.js', function() {

  const okDate1 = new Date('1-12-2019');
  const okDate2 = new Date('1-12-2019:23.13.55');
  const okDate3 = new Date('Sat Dec 05 2020 20:29:54 GMT+0200 (Eastern European Standard Time)');
  const okDate4 = new Date();
  const okDate5 = new Date('1-1-300');

  const legitLeapDay = new Date('29-02-2020');
  const fakeLeapDay =  new Date('29-02-2019');

  const illegalDate1 = new Date('32.1.2020');
  const illegalDate2 = new Date('1.13.2300');
  const illegalDate3 = new Date('0.10.1990');

  const stringDate1 = '1-3-1999';
  const stringDate2 = '1.3.1999';
  const stringDate3 = (new Date()).toString();

  const nonDate1 = '';
  const nonDate2 = null;
  const nonDate3 = undefined;
  const nonDate4 = 189000;
  const nonDate5  = [];

  describe('Testing normal behaviour', function() {

    it('Basic happy case 1: should identify legit Date objects as dates', function() {
      const resultOk1 = isDate(okDate1);
      const resultOk2 = isDate(okDate2);
      const resultOk3 = isDate(okDate3);
      const resultOk4 = isDate(okDate4);
      const resultOk5 = isDate(okDate5);
      const resultOk6 = isDate(legitLeapDay);

      chai.expect(resultOk1).to.equal(true);
      chai.expect(resultOk2).to.equal(true);
      chai.expect(resultOk3).to.equal(true);
      chai.expect(resultOk4).to.equal(true);
      chai.expect(resultOk5).to.equal(true);
      chai.expect(resultOk6).to.equal(true);
    });

    it('Basic error case 1: should identify Date-objects constructed from illegal date values', function() {
      
      const resultBad1 = isDate(fakeLeapDay);
      const resultBad2 = isDate(illegalDate1);
      const resultBad3 = isDate(illegalDate2);
      const resultBad4 = isDate(illegalDate3);

      chai.expect(resultBad1).to.equal(true);
      chai.expect(resultBad2).to.equal(true);
      chai.expect(resultBad3).to.equal(true);
      chai.expect(resultBad4).to.equal(true);
    });

    it('Basic error case 2: should return false for strings that look like dates', function() {
      const resultBad1 = isDate(stringDate1);
      const resultBad2 = isDate(stringDate2);
      const resultBad3 = isDate(stringDate3);

      chai.expect(resultBad1).to.equal(false);
      chai.expect(resultBad2).to.equal(false);
      chai.expect(resultBad3).to.equal(false);
    });

    it('Basic error case 3: should  return false for non-date objects', function() {
      const resultBad1 = isDate(nonDate1);
      const resultBad2 = isDate(nonDate2);
      const resultBad3 = isDate(nonDate3);
      const resultBad4 = isDate(nonDate4);
      const resultBad5 = isDate(nonDate5);

      chai.expect(resultBad1).to.equal(false);
      chai.expect(resultBad2).to.equal(false);
      chai.expect(resultBad3).to.equal(false);
      chai.expect(resultBad4).to.equal(false);
      chai.expect(resultBad5).to.equal(false);
    });

  });
});