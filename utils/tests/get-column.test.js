const getColumn = require('../get-column');
const { filledMatrix } = require('./test-data');

describe('getColumn tests', () => {
    test('check', () => {
        expect(getColumn(filledMatrix, 1)).toEqual([2, 1, 4, 6, 5, 3]);
        expect(getColumn(filledMatrix, 2)).toEqual([1, 6, 3, 5, 4, 2]);
        expect(getColumn(filledMatrix, 3)).toEqual([4, 3, 6, 2, 1, 5]);
        expect(getColumn(filledMatrix, 4)).toEqual([3, 2, 5, 1, 6, 4]);
        expect(getColumn(filledMatrix, 5)).toEqual([5, 4, 1, 3, 2, 6]);
        expect(getColumn(filledMatrix, 6)).toEqual([6, 5, 2, 4, 3, 1]);
    });
});
