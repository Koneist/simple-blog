import {sum, sub, mult, div } from './mathematics'

describe('test1', function() {
    test('positive', () => {
        expect(sum(0, 0).toBe(0));
    })

    test('test2', () => {
        expect(mult(-1, 0).toBe(0))
    })

    test('test3', () => {
        expect(sub(5,5).toBe(0))
    })
})