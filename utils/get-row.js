// @ts-check
/**
 * Get row by number
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Number from 1 to 6
 */
function getRow(matrix, number) {
    return matrix[number - 1];
}

module.exports = getRow;
