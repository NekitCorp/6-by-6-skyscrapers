const getPossibleOptions = require('../get-possible-options');

describe('getPossibleOptions tests', () => {
    test('check #1', () => {
        const matrix = [
            [0, 0, 0, 4, 3, 0],
            [0, 0, 0, 2, 6, 0],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];
        const expected = [5];

        const result = getPossibleOptions(matrix, 1, 1);

        expect(result).toEqual(expected);
    });

    test('check #2', () => {
        const matrix = [
            [0, 0, 0, 4, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [2, 3, 0, 1, 5, 4],
            [6, 5, 0, 3, 2, 1],
            [1, 2, 0, 6, 4, 3],
            [3, 4, 0, 5, 1, 6],
        ];
        const expected = [1, 2, 3, 4, 5, 6];

        const result = getPossibleOptions(matrix, 2, 3);

        expect(result).toEqual(expected);
    });

    test('check #3', () => {
        const matrix = [
            [0, 0, 0, 4, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 0, 3, 2, 1],
            [1, 2, 0, 6, 4, 3],
            [3, 4, 0, 0, 1, 6],
        ];
        const expected = [2, 5];

        const result = getPossibleOptions(matrix, 6, 3);

        expect(result).toEqual(expected);
    });
});
