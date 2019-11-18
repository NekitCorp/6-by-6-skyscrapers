const findSolutionByClues = require('../find-solution-by-clues');

describe('findSolutionByClues tests', () => {
    test('check #1', () => {
        // prettier-ignore
        const clues = [0, 0, 0, 2, 2, 0,
                       0, 0, 0, 6, 3, 0,
                       0, 4, 0, 0, 0, 0,
                       4, 4, 0, 3, 0, 0];

        const matrix = findSolutionByClues(clues);
        const expected = [
            [0, 0, 0, 4, 3, 0],
            [0, 0, 0, 2, 6, 0],
            [2, 3, 6, 1, 5, 4],
            [6, 5, 4, 3, 2, 1],
            [1, 2, 5, 6, 4, 3],
            [3, 4, 2, 5, 1, 6],
        ];

        expect(matrix).toEqual(expected);
    });

    test('check #2', () => {
        // prettier-ignore
        const clues = [3, 2, 2, 3, 2, 1,
                       1, 2, 3, 3, 2, 2,
                       5, 1, 2, 2, 4, 3,
                       3, 2, 1, 2, 2, 4];

        const matrix = findSolutionByClues(clues);
        const expected = [
            [2, 1, 4, 3, 5, 6],
            [1, 6, 3, 2, 4, 5],
            [4, 3, 6, 5, 1, 2],
            [6, 5, 2, 1, 3, 4],
            [5, 4, 1, 6, 2, 3],
            [3, 2, 5, 4, 6, 1],
        ];

        expect(matrix).toEqual(expected);
    });

    test('check #3', () => {
        // prettier-ignore
        const clues = [0, 3, 0, 5, 3, 4, 
                       0, 0, 0, 0, 0, 1,
                       0, 3, 0, 3, 2, 3,
                       3, 2, 0, 3, 1, 0];

        const matrix = findSolutionByClues(clues);
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
        // prettier-ignore
        const clues = [0, 0, 0, 0, 0, 1,
                       0, 3, 0, 3, 2, 3,
                       3, 2, 0, 3, 1, 0,
                       0, 3, 0, 5, 3, 4];

        const matrix = findSolutionByClues(clues);
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

    test('check #5', () => {
        // prettier-ignore
        const clues = [0, 0, 0, 0, 0, 1,
                       0, 3, 0, 3, 2, 3,
                       3, 2, 0, 3, 1, 0,
                       0, 3, 0, 5, 3, 4];

        const matrix = findSolutionByClues(clues);
        const expected = [
            [3, 1, 2, 4, 5, 6],
            [4, 5, 6, 2, 3, 1],
            [1, 3, 4, 5, 6, 2],
            [6, 2, 5, 3, 1, 4],
            [3, 4, 1, 6, 2, 5],
            [5, 6, 2, 1, 4, 3],
        ];

        expect(matrix).toEqual(expected);
    });
});
