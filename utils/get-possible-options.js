// @ts-check
const getColumn = require('./get-column');
const getRow = require('./get-row');

/**
 * Get all possible cell options
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} rowNumber Row number
 * @param {number} columnNumber Column number
 */
function getPossibleOptions(matrix, rowNumber, columnNumber) {
    const column = getColumn(matrix, columnNumber);
    const row = getRow(matrix, rowNumber);
    let possibleOptions = [1, 2, 3, 4, 5, 6];

    possibleOptions = possibleOptions.filter(op => !column.includes(op));
    possibleOptions = possibleOptions.filter(op => !row.includes(op));

    return possibleOptions;
}

module.exports = getPossibleOptions;
