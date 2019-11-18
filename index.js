// @ts-check
const findSolutionByClues = require('./utils/find-solution-by-clues');
const fillEmptyCells = require('./utils/fill-empty-cells');

/**
 * Format matrix
 * @param {number[][]} matrix
 */
const format = matrix =>
    '\r\n' + matrix.map(row => row.join(' ')).join('\r\n') + '\r\n';

/**
 * Format matrix
 * @param {number[]} clues
 */
function solvePuzzle(clues) {
    const matrix = findSolutionByClues(clues);
    fillEmptyCells(matrix);

    return matrix;
}

// prettier-ignore
const clues1 = [3, 2, 2, 3, 2, 1,
                1, 2, 3, 3, 2, 2,
                5, 1, 2, 2, 4, 3,
                3, 2, 1, 2, 2, 4];

process.stdout.write(format(solvePuzzle(clues1)));

// prettier-ignore
const clues2 = [0, 0, 0, 2, 2, 0,
                0, 0, 0, 6, 3, 0,
                0, 4, 0, 0, 0, 0,
                4, 4, 0, 3, 0, 0];

process.stdout.write(format(solvePuzzle(clues2)));

// prettier-ignore
const clues3 = [0, 3, 0, 5, 3, 4,
                0, 0, 0, 0, 0, 1,
                0, 3, 0, 3, 2, 3,
                3, 2, 0, 3, 1, 0];

process.stdout.write(format(solvePuzzle(clues3)));
