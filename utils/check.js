// @ts-check
const getRow = require('./get-row');
const getColumn = require('./get-column');

/**
 * Check duplicate array values
 * @param {number[]} array Array 1x6
 */
function hasDuplicate(array) {
    const arrayWithoutNulls = array.filter(el => el !== 0);

    return new Set(arrayWithoutNulls).size !== arrayWithoutNulls.length;
}

/**
 * Check matrix by rule:
 * "No two skyscrapers in a row or column may have the same number of floors"
 * @param {number[][]} matrix Matrix 6x6
 */
function check(matrix) {
    for (let i = 1; i < 7; i++) {
        if (
            hasDuplicate(getRow(matrix, i)) ||
            hasDuplicate(getColumn(matrix, i))
        ) {
            return false;
        }
    }

    return true;
}

module.exports = check;
