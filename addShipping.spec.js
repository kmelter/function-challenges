const addShipping = require('./addShipping')

describe('addShipping', () => {
    it('for no orders, return empty array', () => {
        const updateOrders = addShipping(10, []);
        expect(updateOrders).toEqual([]);
    })
    it('for one order, should add shipping cost to new price', () => {
        const updateOrders = addShipping(10, [{
            newPrice: 20
        }]);
        expect(updateOrders).toEqual([{
            newPrice: 30
        }]);
    })
})