const cloneMatrix = require('../clone-matrix');
const { filledMatrix } = require('./test-data');

describe('cloneMatrix tests', () => {
    test('check', () => {
        const newMatrix = cloneMatrix(filledMatrix);

        expect(newMatrix).toEqual(filledMatrix);
        expect(newMatrix).not.toBe(filledMatrix);

        for (let i = 0; i < 6; i++) {
            expect(newMatrix[i]).not.toBe(filledMatrix[i]);
        }
    });
});
