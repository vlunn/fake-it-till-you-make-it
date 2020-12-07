import chai from 'chai';
import chunk from '../src/chunk.js';    // Broken according to unit tests, so not tested here
import countBy from '../src/countBy.js' // Broken according to unit tests  
import difference from '../src/difference.js'
import divide from '../src/divide.js'
import filter from '../src/filter.js'
import isDate from '../src/isDate.js'
import isEmpty from '../src/isEmpty.js'

/**
 * This creates a list and uses given library to filter it according to some criteria
 */

describe('Integration: Test ability to filter lists', function () {
    describe('Creating a list and doing operations', function () {
        let products = [
            {
                "color": "purple",
                "type": "minivan",
                "price": "500",
                "capacity": 7,
                "available": true
            },
            {
                "color": "red",
                "type": "station wagon",
                "price": "1500",
                "capacity": 5,
                "available": true
            },
            {
                "color": "blue",
                "type": "truck",
                "price": "",
                "capacity": 1,
                "available": true
            },
            {
                "color": "yellow",
                "type": "catepillar",
                "price": "200",
                "capacity": 8,
                "available": false
            }
        ];
        it('Creates a list and remove everything that has empty value price', function () {
            let available_products = filter(products, ({ price }) => !isEmpty(price))
            let expected_result = [
                {
                    "color": "purple",
                    "type": "minivan",
                    "price": "500",
                    "capacity": 7,
                    "available": true
                },
                {
                    "color": "red",
                    "type": "station wagon",
                    "price": "1500",
                    "capacity": 5,
                    "available": true
                },
                {
                    "color": "yellow",
                    "type": "catepillar",
                    "price": "200",
                    "capacity": 8,
                    "available": false
                }
            ];
            chai.expect(available_products).to.eql(expected_result);
        });
        it('Is able to remove specified items from list', function () {
            let purple_minivan_and_ferrari = [{
                "color": "purple",
                "type": "minivan",
                "price": "500",
                "capacity": 7,
                "available": true
            },
            {
                "color": "red",
                "type": "sport",
                "price": "100500",
                "capacity": 2,
                "available": true
            }];
            let everything_but_purple_minivan = difference(products, purple_minivan_and_ferrari);
            let expected_result = [
                {
                    "color": "red",
                    "type": "station wagon",
                    "price": "1500",
                    "capacity": 5,
                    "available": true
                },
                {
                    "color": "blue",
                    "type": "truck",
                    "price": "",
                    "capacity": 1,
                    "available": true
                },
                {
                    "color": "yellow",
                    "type": "catepillar",
                    "price": "200",
                    "capacity": 8,
                    "available": false
                }
            ];
            chai.expect(everything_but_purple_minivan).to.eql(expected_result);

        });

        it('Counts how large percentage of total products is available', function () {
            let availability_count = countBy(products, av => av.available);
            console.log(products)
            console.log(availability_count)
            let available_percentage = divide(availability_count.true, products.length);
            chai.expect(available_percentage).to.equal(0.75);

        })
    });
});

