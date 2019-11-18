// @ts-check
/**
 * Clone matrix
 * @param {number[][]} matrix Matrix 6x6
 */
function cloneMatrix(matrix) {
    const newMatrix = [];

    for (let i = 0; i < 6; i++) {
        newMatrix[i] = matrix[i].slice();
    }

    return newMatrix;
}

module.exports = cloneMatrix;
