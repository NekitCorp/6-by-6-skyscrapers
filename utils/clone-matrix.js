/**
 * Clone matrix
 * @param array Matrix 6x6
 */
function cloneMatrix(array) {
    const newMatrix = [];

    for (let i = 0; i < 6; i++) {
        newMatrix[i] = array[i].slice();
    }

    return newMatrix;
}

module.exports = cloneMatrix;
