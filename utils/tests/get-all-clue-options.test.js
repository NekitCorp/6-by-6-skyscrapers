const getAllClueOptions = require('../get-all-clue-options');

describe('getAllClueOptions simple tests', () => {
    test('check length', () => {
        expect(getAllClueOptions(1).length).toEqual(120);
        expect(getAllClueOptions(2).length).toEqual(274);
        expect(getAllClueOptions(3).length).toEqual(225);
        expect(getAllClueOptions(4).length).toEqual(85);
        expect(getAllClueOptions(5).length).toEqual(15);
        expect(getAllClueOptions(6).length).toEqual(1);
    });

    test('check clue 1', () => {
        const options = getAllClueOptions(1);

        expect(
            options.find(o => o.toString() === [6, 1, 2, 3, 4, 5].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [6, 1, 3, 4, 2, 5].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [6, 3, 1, 4, 2, 5].toString()),
        ).toBeDefined();
    });

    test('check clue 2', () => {
        const options = getAllClueOptions(2);

        expect(
            options.find(o => o.toString() === [4, 2, 1, 3, 6, 5].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [3, 6, 5, 2, 4, 1].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [5, 6, 1, 2, 4, 3].toString()),
        ).toBeDefined();
    });

    test('check clue 3', () => {
        const options = getAllClueOptions(3);

        expect(
            options.find(o => o.toString() === [2, 3, 6, 1, 5, 4].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [3, 4, 6, 5, 2, 1].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [1, 5, 6, 2, 3, 4].toString()),
        ).toBeDefined();
    });

    test('check clue 4', () => {
        const options = getAllClueOptions(4);

        expect(
            options.find(o => o.toString() === [1, 4, 2, 5, 6, 3].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [3, 4, 2, 5, 1, 6].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [1, 2, 5, 6, 4, 3].toString()),
        ).toBeDefined();
    });

    test('check clue 5', () => {
        const options = getAllClueOptions(5);

        expect(
            options.find(o => o.toString() === [1, 2, 3, 4, 6, 5].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [1, 2, 3, 5, 6, 4].toString()),
        ).toBeDefined();
        expect(
            options.find(o => o.toString() === [1, 2, 4, 5, 6, 3].toString()),
        ).toBeDefined();
    });

    test('check clue 6', () => {
        const options = getAllClueOptions(6);

        expect(
            options.find(o => o.toString() === [1, 2, 3, 4, 5, 6].toString()),
        ).toBeDefined();
    });
});

// describe('getAllClueOptions complex tests with opposite clue', () => {
//     test('check', () => {
//         expect(getRow(filledMatrix, 1)).toEqual([2, 1, 4, 3, 5, 6]);
//         expect(getRow(filledMatrix, 2)).toEqual([1, 6, 3, 2, 4, 5]);
//         expect(getRow(filledMatrix, 3)).toEqual([4, 3, 6, 5, 1, 2]);
//         expect(getRow(filledMatrix, 4)).toEqual([6, 5, 2, 1, 3, 4]);
//         expect(getRow(filledMatrix, 5)).toEqual([5, 4, 1, 6, 2, 3]);
//         expect(getRow(filledMatrix, 6)).toEqual([3, 2, 5, 4, 6, 1]);
//     });
// });

// describe('getAllClueOptions cache tests', () => {
//     test('check', () => {
//         expect(getRow(filledMatrix, 1)).toEqual([2, 1, 4, 3, 5, 6]);
//         expect(getRow(filledMatrix, 2)).toEqual([1, 6, 3, 2, 4, 5]);
//         expect(getRow(filledMatrix, 3)).toEqual([4, 3, 6, 5, 1, 2]);
//         expect(getRow(filledMatrix, 4)).toEqual([6, 5, 2, 1, 3, 4]);
//         expect(getRow(filledMatrix, 5)).toEqual([5, 4, 1, 6, 2, 3]);
//         expect(getRow(filledMatrix, 6)).toEqual([3, 2, 5, 4, 6, 1]);
//     });
// });
