// @ts-check
const getColumn = require('./get-column');

/**
 * Set column
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Column number from 1 to 6
 * @param {number[]} column New column
 */
function setColumn(matrix, number, column) {
    for (let i = 0; i < 6; i++) {
        matrix[i][number - 1] = column[i];
    }
}

/**
 * Check if a column can get up without intersections
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Column number from 1 to 6
 * @param {number[]} column New column
 */
function canSetColumn(matrix, number, column) {
    const currentColumn = getColumn(matrix, number);

    for (let i = 0; i < 6; i++) {
        if (currentColumn[i] !== 0 && currentColumn[i] !== column[i]) {
            return false;
        }
    }

    return true;
}

module.exports = { setColumn, canSetColumn };
