var sum = require('../sum.js');

describe('Sum test', () => {
    it('should return 4 when a and b are 2', () => {
        expect(sum(2, 2)).toBe(4);
    })
})