import chai from 'chai';
import difference from '../src/difference.js'
import isDate from '../src/isDate.js'
import filter from '../src/filter.js'

/**
 * This creates a list and uses given library to filter it according to some criteria
 */

describe('Integration: Test ability to add and remove items to lists', function () {
    describe('Removing all items with invalid dates', function () {
        let products = [
            {
                "color": "purple",
                "type": "minivan",
                "price": "500",
                "capacity": 7,
                "available": true,
                "created": new Date(2018, 11)
            },
            {
                "color": "red",
                "type": "station wagon",
                "price": "1500",
                "capacity": 5,
                "available": true,
                "created": new Date(100000000000)
            },
            {
                "color": "blue",
                "type": "truck",
                "price": "",
                "capacity": 1,
                "available": true,
                "created": new Date(2016, 11)
            },
            {
                "color": "yellow",
                "type": "catepillar",
                "price": "200",
                "capacity": 8,
                "available": false,
                "created": "yes"
            }
        ];
        it('Removes items with invalid dates', function () {
            let available_products = filter(products, ({ created }) => isDate(created))
            let expected_result = [
                {
                    "color": "purple",
                    "type": "minivan",
                    "price": "500",
                    "capacity": 7,
                    "available": true,
                    "created": new Date(2018, 11)
                },
                {
                    "color": "red",
                    "type": "station wagon",
                    "price": "1500",
                    "capacity": 5,
                    "available": true,
                    "created": new Date(100000000000)
                },
                {
                    "color": "blue",
                    "type": "truck",
                    "price": "",
                    "capacity": 1,
                    "available": true,
                    "created": new Date(2016, 11)
                }];
            chai.expect(available_products).to.eql(expected_result);
        });

    });
});

