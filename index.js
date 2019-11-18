// @ts-check
const findSolutionByClues = require('./utils/find-solution-by-clues');
const fillEmptyCells = require('./utils/fill-empty-cells');

/**
 * Format matrix
 * @param {number[]} clues
 */
function solvePuzzle(clues) {
    const matrix = findSolutionByClues(clues);
    fillEmptyCells(matrix);

    return matrix;
}

module.exports = solvePuzzle;
