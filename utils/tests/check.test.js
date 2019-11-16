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

    test('false', () => {
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
});

describe('check with nulls tests', () => {
    test('true', () => {
        const matrix = [
            [null, null, null, null, null, 6],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [null, null, 2, null, null, null],
            [5, 4, 1, 6, 2, 3],
            [3, 2, null, 4, 6, 1],
        ];

        expect(check(matrix)).toBeTruthy();
    });

    test('false', () => {
        const matrix = [
            [null, null, null, null, null, 5],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [null, null, 1, null, null, null],
            [5, 4, 1, 6, 2, 3],
            [3, 2, null, 4, 6, 1],
        ];

        expect(check(matrix)).toBeFalsy();
    });
});
