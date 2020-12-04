import chai from 'chai';
import castArray from '../src/castArray.js';

/**
 * Happy cases include:
 *  - Any values, whether an array or not
 *  
 * Most relevant exception cases:
 * 
 * Most useful/common error cases:
 * 
 * Other considerations:
 */

describe('Test castArray.js', function () {

    describe('Happy cases: Function is given something other than array', function () {

        it('Basic happy case 1: should work with string', function () {
            const teststring = "Soittakaa Paranoid !!1";
            const result = castArray(teststring);
            const expectedResult = ["Soittakaa Paranoid !!1"];
            chai.expect(result).to.eql(expectedResult);
        });

        it('Basic happy case 2: should work with objects', function () {
            const teststring = {
                'soittakaa': 1,
                'kappale': 'paranoid'
            };
            const result = castArray(teststring);
            const expectedResult = [{ 'soittakaa': 1, 'kappale': 'paranoid' }];

            chai.expect(result).to.eql(expectedResult);
        });

        it('Basic happy case 3: should work with float', function () {
            const testfloat = 1.23;
            const result = castArray(testfloat);
            const expectedResult = [1.23];

            chai.expect(result).to.eql(expectedResult);
        });
    });

    describe('Happy cases: Function is given array', function () {

        it('Should return object in an array as it is', function () {
            const testobject = [{ 'soittakaa': 1, 'kappale': 'paranoid' }];
            const result = castArray(testobject);

            chai.expect(result).to.eql(testobject);
        });
    });
});
