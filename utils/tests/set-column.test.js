const { setColumn, canSetColumn } = require('../set-column');
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

describe('canSetColumn tests', () => {
    test('check #1', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetColumn(matrix, 4, [3, 1, 5, 1, 6, 4])).toBeTruthy();
    });

    test('check #2', () => {
        const matrix = [
            [2, 1, null, 3, 5, 6],
            [1, 1, null, 1, 1, 1],
            [null, null, null, null, null, null],
            [6, 5, null, 1, 3, 4],
            [5, 4, null, 6, 2, 3],
            [3, 2, null, 4, 6, 1],
        ];

        expect(canSetColumn(matrix, 3, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #3', () => {
        const matrix = [
            [null, 5, null, null, null, 4],
            [5, 1, 4, 3, 5, 6],
            [null, 1, 1, 1, 1, 1],
            [null, 5, 2, 1, 3, 4],
            [null, 4, 1, 6, 2, 3],
            [4, 2, 5, 4, 6, 1],
        ];

        expect(canSetColumn(matrix, 1, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #4', () => {
        const matrix = [
            [2, 1, 4, 3, null, 6],
            [1, 1, 1, 1, null, 1],
            [6, 5, 2, 1, null, 4],
            [5, 4, 1, 6, null, 3],
            [null, null, null, null, null, 4],
            [3, 2, 5, 4, 4, 1],
        ];

        expect(canSetColumn(matrix, 5, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #5', () => {
        const matrix = [
            [2, 1, 4, 3, 5, null],
            [1, 1, 1, 1, 1, null],
            [6, 5, 2, 1, 3, null],
            [5, 4, 1, 6, 2, null],
            [3, 2, 5, 4, 6, null],
            [null, null, null, null, null, 5],
        ];

        expect(canSetColumn(matrix, 6, [6, 5, 2, 1, 3, 4])).toBeFalsy();
    });

    test('check #6', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 4, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, null, 4],
            [5, 4, 1, null, 2, 3],
            [3, 2, 5, 4, 3, 1],
        ];

        expect(canSetColumn(matrix, 5, [5, 4, 6, 1, 2, 3])).toBeFalsy();
    });
});
