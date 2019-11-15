/**
 * Get the number of visible skyscrapers
 * @param array Array of 6 numbers from 1 to 6
 */
function getVisibleCount(array) {
    return array.map((el, i) => array.slice(0, i).filter(left => el < left).length).filter(el => el === 0).length;
}

module.exports = getVisibleCount;
