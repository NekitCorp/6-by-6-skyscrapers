/**
 * Set row
 * @param array Matrix 6x6
 * @param number Row number from 1 to 6
 * @param row New row
 */
function setRow(array, number, row) {
    array[number - 1] = row;
}

module.exports = setRow;
