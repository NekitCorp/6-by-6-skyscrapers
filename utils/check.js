const getRow = require('./get-row');
const getColumn = require('./get-column');

/**
 * Check duplicate array values
 * @param array Array 1x6
 */
function hasDuplicate(array) {
    const arrayWithoutNulls = array.filter(el => el !== null);

    return new Set(arrayWithoutNulls).size !== arrayWithoutNulls.length;
}

/**
 * Check matrix by rule:
 * "No two skyscrapers in a row or column may have the same number of floors"
 * @param array Matrix 6x6
 */
function check(array) {
    for (let i = 1; i < 7; i++) {
        if (
            hasDuplicate(getRow(array, i)) ||
            hasDuplicate(getColumn(array, i))
        ) {
            return false;
        }
    }

    return true;
}

module.exports = check;
