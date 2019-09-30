var multiply = require('../multiply.js');

describe('Multiply test', () => {
    it('should return 4 when a and b are 2', () => {
        expect(multiply(2, 2)).toBe(4);
    })

    it('should return 6 when a is 3 and b is 2', () => {
        expect(multiply(3, 2)).toBe(6);
    })
})
