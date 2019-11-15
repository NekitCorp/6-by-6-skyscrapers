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

module.exports = setColumn;
