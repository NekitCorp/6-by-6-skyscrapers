const getRow = require('./get-row');

/**
 * Set row
 * @param array Matrix 6x6
 * @param number Row number from 1 to 6
 * @param row New row
 */
function setRow(array, number, row) {
    array[number - 1] = row;
}

/**
 * Check if a row can get up without intersections
 * @param array Matrix 6x6
 * @param number Row number from 1 to 6
 * @param row New row
 */
function canSetRow(array, number, row) {
    const currentRow = getRow(array, number);

    for (let i = 0; i < 6; i++) {
        if (currentRow[i] !== null && currentRow[i] !== row[i]) {
            return false;
        }
    }

    return true;
}

module.exports = { canSetRow, setRow };
