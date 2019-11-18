// @ts-check
const solvePuzzle = require('./index');

/**
 * Format matrix
 * @param {number[][]} matrix
 */
const format = matrix =>
    '\r\n' + matrix.map(row => row.join(' ')).join('\r\n') + '\r\n';

// console.time('dbsave');

// // prettier-ignore
// const clues2 = [0, 0, 0, 2, 2, 0,
//     0, 0, 0, 6, 3, 0,
//     0, 4, 0, 0, 0, 0,
//     4, 4, 0, 3, 0, 0];

// process.stdout.write(format(solvePuzzle(clues2)));

// console.timeEnd('dbsave');

console.time('dbsave');

// prettier-ignore
const clues1 = [0, 0, 0, 0, 0, 1,
    0, 3, 0, 3, 2, 3,
    3, 2, 0, 3, 1, 0,
    0, 3, 0, 5, 3, 4];

process.stdout.write(format(solvePuzzle(clues1)));

console.timeEnd('dbsave');

// console.time('dbsave');

// // prettier-ignore
// const clues3 = [0, 3, 0, 5, 3, 4,
//     0, 0, 0, 0, 0, 1,
//     0, 3, 0, 3, 2, 3,
//     3, 2, 0, 3, 1, 0];

// process.stdout.write(format(solvePuzzle(clues3)));

// console.timeEnd('dbsave');
