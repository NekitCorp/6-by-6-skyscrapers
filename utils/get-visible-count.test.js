const getVisibleCount = require('./get-visible-count');

describe('getVisibleCount tests', () => {
    test('check', () => {
        expect(getVisibleCount([1, 2, 3, 4, 5, 6])).toBe(6);
        expect(getVisibleCount([6, 5, 4, 3, 2, 1])).toBe(1);
        expect(getVisibleCount([2, 3, 6, 1, 5, 4])).toBe(3);
        expect(getVisibleCount([1, 2, 5, 6, 4, 3])).toBe(4);
        expect(getVisibleCount([3, 4, 2, 5, 1, 6])).toBe(4);
        expect(getVisibleCount([4, 2, 1, 3, 6, 5])).toBe(2);
        expect(getVisibleCount([3, 6, 5, 2, 4, 1])).toBe(2);
        expect(getVisibleCount([3, 4, 6, 5, 2, 1])).toBe(3);
        expect(getVisibleCount([3, 4, 6, 5, 2, 1])).toBe(3);
    });
});
