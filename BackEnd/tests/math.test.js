const {sum, sub, mult, div } = require('./mathematics');

describe('test suit', function() {
    test('test1', () => {
        expect(sum(12, 268)).toBe(280);
    })

    test('test2', () => {
        expect(mult(-4, 7)).toBe(-28);
    })

    test('test3', () => {
        expect(sub(-12,6)).toBe(-18);
    })

    test('test4', () => {
        expect(div(1024,256)).toBe(4);
    })
})