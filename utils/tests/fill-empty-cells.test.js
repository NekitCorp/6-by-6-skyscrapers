const fillEmptyCells = require('../fill-empty-cells');

describe('fillEmptyCells tests', () => {
    test('check #1', () => {
        const matrix = [
            [0, 0, 0, 4, 3, 0],
            [0, 0, 0, 2, 6, 0],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];

        fillEmptyCells(matrix);

        const expected = [
            [5, 6, 1, 4, 3, 2],
            [4, 1, 3, 2, 6, 5],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];

        expect(matrix).toEqual(expected);
    });

    test('check #2', () => {
        const matrix = [
            [5, 6, 1, 4, 3, 2],
            [4, 1, 3, 2, 6, 5],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];

        fillEmptyCells(matrix);

        const expected = [
            [5, 6, 1, 4, 3, 2],
            [4, 1, 3, 2, 6, 5],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];

        expect(matrix).toEqual(expected);
    });

    test('check #3', () => {
        const matrix = [
            [0, 2, 6, 1, 4, 3],
            [6, 0, 3, 2, 5, 1],
            [3, 1, 0, 4, 6, 2],
            [2, 6, 1, 0, 3, 4],
            [4, 0, 2, 6, 0, 5],
            [1, 5, 4, 3, 2, 0],
        ];

        fillEmptyCells(matrix);

        const expected = [
            [5, 2, 6, 1, 4, 3],
            [6, 4, 3, 2, 5, 1],
            [3, 1, 5, 4, 6, 2],
            [2, 6, 1, 5, 3, 4],
            [4, 3, 2, 6, 1, 5],
            [1, 5, 4, 3, 2, 6],
        ];

        expect(matrix).toEqual(expected);
    });

    test('check #4', () => {
        const matrix = [
            [0, 0, 0, 0, 0, 0],
            [6, 4, 3, 2, 5, 0],
            [3, 1, 5, 4, 6, 0],
            [2, 6, 1, 5, 3, 0],
            [4, 3, 2, 6, 1, 0],
            [1, 5, 4, 3, 2, 0],
        ];

        fillEmptyCells(matrix);

        const expected = [
            [5, 2, 6, 1, 4, 3],
            [6, 4, 3, 2, 5, 1],
            [3, 1, 5, 4, 6, 2],
            [2, 6, 1, 5, 3, 4],
            [4, 3, 2, 6, 1, 5],
            [1, 5, 4, 3, 2, 6],
        ];

        expect(matrix).toEqual(expected);
    });
});
