const { setRow, canSetRow } = require('../set-row');
const cloneMatrix = require('../clone-matrix');
const { filledMatrix } = require('./test-data');

describe('setRow tests', () => {
    test('check #1', () => {
        const matrix = cloneMatrix(filledMatrix);
        setRow(matrix, 2, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ]);
    });

    test('check #2', () => {
        const matrix = cloneMatrix(filledMatrix);
        setRow(matrix, 2, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ]);
    });

    test('check #3', () => {
        const matrix = cloneMatrix(filledMatrix);
        setRow(matrix, 2, [1, 1, 1, 1, 1, 1]);

        expect(matrix).toEqual([
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ]);
    });
});

describe('canSetRow tests', () => {
    test('check #1', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetRow(matrix, 4, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #2', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [null, null, null, null, null, null],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetRow(matrix, 3, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #3', () => {
        const matrix = [
            [null, 5, null, null, null, 4],
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetRow(matrix, 1, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #4', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [null, null, null, null, null, 4],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetRow(matrix, 5, [6, 5, 2, 1, 3, 4])).toBeTruthy();
    });

    test('check #5', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
            [null, null, null, null, null, 5],
        ];

        expect(canSetRow(matrix, 6, [6, 5, 2, 1, 3, 4])).toBeFalsy();
    });

    test('check #6', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 1, 1, 1, 1, 1],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, null, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(canSetRow(matrix, 5, [5, 4, 6, 1, 2, 3])).toBeFalsy();
    });
});
