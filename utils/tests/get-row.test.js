const getRow = require('../get-row');
const { filledMatrix } = require('./test-data');

describe('getRow tests', () => {
    test('check', () => {
        expect(getRow(filledMatrix, 1)).toEqual([2, 1, 4, 3, 5, 6]);
        expect(getRow(filledMatrix, 2)).toEqual([1, 6, 3, 2, 4, 5]);
        expect(getRow(filledMatrix, 3)).toEqual([4, 3, 6, 5, 1, 2]);
        expect(getRow(filledMatrix, 4)).toEqual([6, 5, 2, 1, 3, 4]);
        expect(getRow(filledMatrix, 5)).toEqual([5, 4, 1, 6, 2, 3]);
        expect(getRow(filledMatrix, 6)).toEqual([3, 2, 5, 4, 6, 1]);
    });
});
