const check = require('../check');

describe('check without nulls tests', () => {
    test('true', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 6],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(check(matrix)).toBeTruthy();
    });

    test('false #1', () => {
        const matrix = [
            [2, 1, 4, 3, 5, 5],
            [1, 6, 3, 2, 4, 6],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(check(matrix)).toBeFalsy();
    });

    test('false #2', () => {
        const matrix = [
            [2, 1, 3, 4, 5, 6],
            [4, 5, 6, 2, 3, 1],
            [1, 3, 4, 5, 6, 2],
            [6, 2, 5, 3, 1, 4],
            [3, 4, 1, 6, 2, 5],
            [5, 6, 2, 1, 4, 3],
        ];

        expect(check(matrix)).toBeTruthy();
    });
});

describe('check with nulls tests', () => {
    test('true', () => {
        const matrix = [
            [0, 0, 0, 0, 0, 6],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [0, 0, 2, 0, 0, 0],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 0, 4, 6, 1],
        ];

        expect(check(matrix)).toBeTruthy();
    });

    test('false', () => {
        const matrix = [
            [0, 0, 0, 0, 0, 5],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [0, 0, 1, 0, 0, 0],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 0, 4, 6, 1],
        ];

        expect(check(matrix)).toBeFalsy();
    });
});
