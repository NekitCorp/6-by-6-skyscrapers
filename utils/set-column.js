const getColumn = require('./get-column');

/**
 * Set column
 * @param array Matrix 6x6
 * @param number Column number from 1 to 6
 * @param column New column
 */
function setColumn(array, number, column) {
    for (let i = 0; i < 6; i++) {
        array[i][number - 1] = column[i];
    }
}

/**
 * Check if a column can get up without intersections
 * @param array Matrix 6x6
 * @param number Column number from 1 to 6
 * @param column New column
 */
function canSetColumn(array, number, column) {
    const currentColumn = getColumn(array, number);

    for (let i = 0; i < 6; i++) {
        if (currentColumn[i] !== null && currentColumn[i] !== column[i]) {
            return false;
        }
    }

    return true;
}

module.exports = { setColumn, canSetColumn };
