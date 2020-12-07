import chai from 'chai';
import add from '../src/add.js'
import isEmpty from '../src/isEmpty.js'
import reduce from '../src/reduce.js'

describe('Integration: Reducing a value from list of products', function () {
    describe('Calculate sum of item prices', function () {
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
        it('Calculates total price from list of items excluding empty values', function () {
            let expected_result = 2200;
            let total_price = reduce(products, function(accumulated, e){
                if(!isEmpty(e.price)){
                    return accumulated;
                }
                else {
                    return add(accumulated, e.price);
                }
            }, 0);
            chai.expect(total_price).to.equal(expected_result);
        });

    });
});

