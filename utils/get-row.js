/**
 * Get row by number
 * @param array Matrix 6x6
 * @param number Number from 1 to 6
 */
function getRow(array, number) {
    return array[number - 1];
}

module.exports = getRow;
