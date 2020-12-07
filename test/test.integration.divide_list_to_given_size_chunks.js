import chai from 'chai';
import chunk from '../src/chunk.js' // Broken according to unit tests

describe('Integration: Dividing list to given size chunks', function () {
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
            "available": true,
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
    it('Chops array to given size chunks', function () {
        let chunked_products = chunk(products, 3);
        let expected_result = [
            [{
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
                "available": true,
                "created": new Date(2016, 11)
            }],
            {
                "color": "yellow",
                "type": "catepillar",
                "price": 200,
                "capacity": 8,
                "available": false,
                "created": "yes"
            }
        ];

        chai.expect(chunked_products).to.eql(expected_result);
    });
});