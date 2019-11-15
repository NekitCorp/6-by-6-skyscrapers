const setColumn = require('../set-column');
const cloneMatrix = require('../clone-matrix');
const { filledMatrix } = require('./test-data');

describe('setColumn tests', () => {
    test('check #1', () => {
        const matrix = cloneMatrix(filledMatrix);
        setColumn(matrix, 6, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [2, 1, 4, 3, 5, 1],
            [1, 6, 3, 2, 4, 1],
            [4, 3, 6, 5, 1, 1],
            [6, 5, 2, 1, 3, 1],
            [5, 4, 1, 6, 2, 1],
            [3, 2, 5, 4, 6, 1],
        ]);
    });

    test('check #2', () => {
        const matrix = cloneMatrix(filledMatrix);
        setColumn(matrix, 1, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [1, 1, 4, 3, 5, 6],
            [1, 6, 3, 2, 4, 5],
            [1, 3, 6, 5, 1, 2],
            [1, 5, 2, 1, 3, 4],
            [1, 4, 1, 6, 2, 3],
            [1, 2, 5, 4, 6, 1],
        ]);
    });

    test('check #3', () => {
        const matrix = cloneMatrix(filledMatrix);
        setColumn(matrix, 3, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [2, 1, 1, 3, 5, 6],
            [1, 6, 1, 2, 4, 5],
            [4, 3, 1, 5, 1, 2],
            [6, 5, 1, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 1, 4, 6, 1],
        ]);
    });
});
