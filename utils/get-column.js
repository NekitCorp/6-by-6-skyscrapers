// @ts-check
/**
 * Get column by number
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Number from 1 to 6
 */
function getColumn(matrix, number) {
    const result = [];

    for (let row = 0; row < 6; row++) {
        result.push(matrix[row][number - 1]);
    }

    return result;
}

module.exports = getColumn;
