import chai from 'chai';
import chunk from '../src/chunk.js';

/**
 * Happy cases include:
 *  - Array split to chunks size of positive numbers
 *  
 * Most relevant exception cases:
 *  - Trying to split to negative size chunks
 * 
 * Most useful/common error cases:
 * 
 * Other considerations:
 */

describe('Test chunk.js', function () {

    describe('Array split to chunks size of positive numbers', function () {

        it('Basic happy case 1: Array to size 1 chunks', function () {
            const input = [1, 2, 3, 4]
            const result = chunk(input, 1);
            const expectedResult = [[1], [2], [3], [4]];

            chai.expect(result).to.eql(expectedResult);
        });

        it('Basic happy case 2: array with last chunk being smaller than given size', function () {
            const input = [1, 2, 3, 4]
            const result = chunk(input, 3);
            const expectedResult = [[1, 2, 3], [4]];

            chai.expect(result).to.eql(expectedResult);
        });
    });

    describe('Most common error cases', function () {

        it('Returns empty array with negative size chunk', function () {
            const input = [1, 2, 3, 4]
            const result = chunk(input, -3);
            const expectedResult = [];

            chai.expect(result).to.eql(expectedResult);
        });

        it('Returns empty array with 0 size chunk', function () {
            const input = [1, 2, 3, 4]
            const result = chunk(input, 0);
            const expectedResult = [];

            chai.expect(result).to.eql(expectedResult);
        });
    });
});
