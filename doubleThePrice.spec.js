const doubleThePrice = require('./doubleThePrice');

describe('doubleThePrice', () => {
    it('for empty orders, return empty array', () => {
        const modifiedOrders = doubleThePrice([]);
        expect(modifiedOrders).toEqual([]);
    })

    it('for an order with one element, double that price', () => {
        const modifiedOrders = doubleThePrice([{
            price: 10
        }]);
        expect(modifiedOrders).toEqual([{
            price: 10,
            newPrice: 20
        }, {
            price: 20,
            newPrice: 40
        }]);
    })
})