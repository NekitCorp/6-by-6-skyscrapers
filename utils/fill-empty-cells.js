// @ts-check
const check = require('./check');
const getPossibleOptions = require('./get-possible-options');

/**
 * Fill empty matrix cells
 * @param {number[][]} matrix Matrix 6x6
 */
function fillEmptyCells(matrix) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (matrix[i][j] === 0) {
                const options = getPossibleOptions(matrix, i + 1, j + 1);

                for (let k = 0; k < options.length; k++) {
                    matrix[i][j] = options[k];

                    if (check(matrix)) {
                        if (fillEmptyCells(matrix)) {
                            return true;
                        }
                    }

                    matrix[i][j] = 0;
                }

                return false;
            }
        }
    }

    return true;
}

module.exports = fillEmptyCells;
