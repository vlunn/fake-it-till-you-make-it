import chai from 'chai';
import capitalize from '../src/capitalize.js'
import endsWith from '../src/endsWith.js'
import upperFirst from '../src/upperFirst.js'

describe('Integration: Formatting a string', function () {

    it('Makes a text string start with capital letter, has other letters lowercase and ends with "."', function () {
        let unformatted = "maansiirtoKONEELLA ojan kaivamma HEH";
        let capitalized = capitalize(unformatted);
        if (!endsWith(capitalized, '.')) {
            capitalized += "."
        }
        let result = "Maansiirtokoneella ojan kaivamma heh.";
        chai.expect(capitalized).to.equal(result);
    });

    it('Makes a text string start with capital letter and end with "."', function () {
        let unformatted = "maansiirtoKONEELLA ojan kaivamma HEH";
        let capitalized = upperFirst(unformatted);
        if (!endsWith(capitalized, '.')) {
            capitalized += "."
        }
        let result = "MaansiirtoKONEELLA ojan kaivamma HEH.";
        chai.expect(capitalized).to.equal(result);
    });

});


