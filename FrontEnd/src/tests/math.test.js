import {sum, sub, mult, div } from './mathematics'
import {expect, jest, test, describe} from '@jest/globals';

describe('test suit', function() {
    test('test1', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test('test2', () => {
        expect(mult(-4, 5)).toBe(-20);
    })

    test('test3', () => {
        expect(sub(5,5)).toBe(0);
    })

    test('test4', () => {
        expect(div(4,2)).toBe(2);
    })
})