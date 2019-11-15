/**
 * Get column by number
 * @param array Matrix 6x6
 * @param number Number from 1 to 6
 */
function getColumn(array, number) {
    const result = [];

    for (let row = 0; row < 6; row++) {
        result.push(array[row][number - 1]);
    }

    return result;
}

module.exports = getColumn;
