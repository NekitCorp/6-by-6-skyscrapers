// @ts-check
const findSolutionByClues = require('./utils/find-solution-by-clues');
const fillEmptyCells = require('./utils/fill-empty-cells');

const format = matrix =>
    '\r\n' + matrix.map(row => row.join(' ')).join('\r\n') + '\r\n';

/**
 * Format matrix
 * @param {number[]} clues
 */
function solvePuzzle(clues) {
    const matrix = findSolutionByClues(clues);

    process.stdout.write(format(matrix));

    fillEmptyCells(matrix);

    return matrix;
}

module.exports = solvePuzzle;
