const {
    getAllClueOptions,
    getAllCluesOptions,
} = require('../get-all-clue-options');

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

describe('getAllClueOptions complex tests with opposite clue', () => {
    test('check 6 - 1', () => {
        const options = getAllClueOptions(6, 1);

        expect(options.length).toBe(1);
        expect(
            options.find(o => o.toString() === [1, 2, 3, 4, 5, 6].toString()),
        ).toBeDefined();
    });

    test('check 2 - 4', () => {
        const options = getAllClueOptions(2, 4);

        expect(
            options.find(o => o.toString() === [3, 6, 5, 2, 4, 1].toString()),
        ).toBeDefined();
    });

    test('check 4 - 3', () => {
        const options = getAllClueOptions(4, 3);

        expect(
            options.find(o => o.toString() === [1, 2, 5, 6, 4, 3].toString()),
        ).toBeDefined();
    });

    test('check 2 - 2', () => {
        const options = getAllClueOptions(2, 2);

        expect(
            options.find(o => o.toString() === [4, 2, 1, 3, 6, 5].toString()),
        ).toBeDefined();
    });

    test('check 4 - 1', () => {
        const options = getAllClueOptions(4, 1);

        expect(
            options.find(o => o.toString() === [3, 4, 2, 5, 1, 6].toString()),
        ).toBeDefined();
    });
});

describe('getAllCluesOptions tests', () => {
    test('check', () => {
        // prettier-ignore
        const clues = [ 0, 0, 0, 2, 2, 0,
                        0, 0, 0, 6, 3, 0,
                        0, 4, 0, 0, 0, 0,
                        4, 4, 0, 3, 0, 0];

        const cluesOptions = getAllCluesOptions(clues);

        // check 0 clue
        clues.forEach((clue, i) => {
            if (clue === 0) {
                expect(cluesOptions[i].length).toBe(0);
            }
        });

        // check others
        expect(cluesOptions[3].length).toBe(274); // 2
        expect(cluesOptions[4].length).toBe(40); // 2 - 4
        expect(cluesOptions[9].length).toBe(1); // 6
        expect(cluesOptions[10].length).toBe(10); // 3 - 4
        expect(cluesOptions[13].length).toBe(0); // opposite 4
        expect(cluesOptions[18].length).toBe(85); // 4
        expect(cluesOptions[19].length).toBe(0); // opposite 4
        expect(cluesOptions[21].length).toBe(225); // 3
    });
});
