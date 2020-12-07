import chai from 'chai';
import defaultTo from '../src/defaultTo.js'
import divide from '../src/divide.js'
import filter from '../src/filter.js'
import isEmpty from '../src/isEmpty.js'
import map from '../src/map.js'


describe('Integration: Editing items inside a list', function () {
    let products = [
        {
            "color": "purple",
            "type": "minivan",
            "price": 500,
            "capacity": 7,
            "available": true,
            "created": new Date(2018, 11)
        },
        {
            "color": "red",
            "type": "station wagon",
            "price": 1500,
            "capacity": 5,
            "available": true,
            "created": new Date(100000000000)
        },
        {
            "color": "blue",
            "type": "truck",
            "price": null,
            "capacity": 1,
            "available": null,
            "created": new Date(2016, 11)
        },
        {
            "color": "yellow",
            "type": "catepillar",
            "price": 200,
            "capacity": 8,
            "available": false,
            "created": "yes"
        }
    ];
    let null_to_false = [];

    it('Changing null availability to false', function () {
        let expected_result = [
            {
                "color": "purple",
                "type": "minivan",
                "price": 500,
                "capacity": 7,
                "available": true,
                "created": new Date(2018, 11)
            },
            {
                "color": "red",
                "type": "station wagon",
                "price": 1500,
                "capacity": 5,
                "available": true,
                "created": new Date(100000000000)
            },
            {
                "color": "blue",
                "type": "truck",
                "price": null,
                "capacity": 1,
                "available": false,
                "created": new Date(2016, 11)
            },
            {
                "color": "yellow",
                "type": "catepillar",
                "price": 200,
                "capacity": 8,
                "available": false,
                "created": "yes"
            }
        ];
        null_to_false = map(products, function (prod) {
            prod.available = defaultTo(prod.available, false);
            return prod;
        })
        chai.expect(null_to_false).to.eql(expected_result);
    });
    it('Removes unavailable products from previous result using map', function () {
        let only_available = map(null_to_false, function (prod) {
            if (isEmpty(prod.available) || prod.available === false) {
            }
            else {
                return prod;
            }
        });
        let expected_result = [
            {
                "color": "purple",
                "type": "minivan",
                "price": 500,
                "capacity": 7,
                "available": true,
                "created": new Date(2018, 11)
            },
            {
                "color": "red",
                "type": "station wagon",
                "price": 1500,
                "capacity": 5,
                "available": true,
                "created": new Date(100000000000)
            }
        ];
        chai.expect(only_available).to.eql(expected_result);
    });

    it('Removes unavailable products from previous result using filter', function () {
        let only_available = filter(null_to_false, ({available}) => available);
        let expected_result = [
            {
                "color": "purple",
                "type": "minivan",
                "price": 500,
                "capacity": 7,
                "available": true,
                "created": new Date(2018, 11)
            },
            {
                "color": "red",
                "type": "station wagon",
                "price": 1500,
                "capacity": 5,
                "available": true,
                "created": new Date(100000000000)
            }
        ];
        chai.expect(only_available).to.eql(expected_result);
    });

});

