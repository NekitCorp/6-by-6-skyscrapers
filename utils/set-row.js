// @ts-check
const getRow = require('./get-row');

/**
 * Set row
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Row number from 1 to 6
 * @param {number[]} row New row
 */
function setRow(matrix, number, row) {
    matrix[number - 1] = row;
}

/**
 * Check if a row can get up without intersections
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Row number from 1 to 6
 * @param {number[]} row New row
 */
function canSetRow(matrix, number, row) {
    const currentRow = getRow(matrix, number);

    for (let i = 0; i < 6; i++) {
        if (currentRow[i] !== 0 && currentRow[i] !== row[i]) {
            return false;
        }
    }

    return true;
}

module.exports = { canSetRow, setRow };
