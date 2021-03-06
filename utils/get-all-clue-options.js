// @ts-check
const getVisibleCount = require('./get-visible-count');

/**
 * Generate all permutations
 * https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
 * @param {number[]} xs Options
 */
function perm(xs) {
    /** @type {number[][]} */
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

        if (!rest.length) {
            ret.push([xs[i]]);
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]));
            }
        }
    }

    return ret;
}

const allPermutations = perm([1, 2, 3, 4, 5, 6]);
const clueOptionsCache = {};

/**
 * Get all options by clue numbers
 * @param {number} clue Clue number from 1 to 6
 * @param {number=} oppositeClue Opposite clue Number (if exist) from 1 to 6
 *
 * @returns {number[][]}
 */
function getAllClueOptions(clue, oppositeClue) {
    const cacheKey = oppositeClue ? `${clue}-${oppositeClue}` : clue;

    if (clueOptionsCache[cacheKey]) {
        return clueOptionsCache[cacheKey];
    }

    clueOptionsCache[cacheKey] = oppositeClue
        ? allPermutations.filter(
              o =>
                  getVisibleCount(o) === clue &&
                  getVisibleCount(o.slice().reverse()) === oppositeClue,
          )
        : allPermutations.filter(o => getVisibleCount(o) === clue);

    return clueOptionsCache[cacheKey];
}

// for (let i = 1; i < 7; i++) {
//     console.log(i, getAllClueOptions(i));
// }

// for (let i = 1; i < 7; i++) {
//     for (let j = 1; j < 7; j++) {
//         console.log(i, j, getAllClueOptions(i, j));
//     }
// }

const oppositeClueIndex = {
    0: 17,
    1: 16,
    2: 15,
    3: 14,
    4: 13,
    5: 12,
    6: 23,
    7: 22,
    8: 21,
    9: 20,
    10: 19,
    11: 18,
};

/**
 * Get all clues options.
 * If clue has opposite clue, opposite clue deleted and
 * the current one decreases the number of options.
 * @param {number[]} clues Clues, array 1x24
 *
 * @returns {number[][][]}
 */
function getAllCluesOptions(clues) {
    /** @type {number[][][]} */
    const cluesCopy = [];

    for (let i = 0; i < 24; i++) {
        if (clues[i] === 0) {
            cluesCopy[i] = [];
            continue;
        }

        if (oppositeClueIndex[i] && clues[oppositeClueIndex[i]]) {
            cluesCopy[i] = getAllClueOptions(
                clues[i],
                clues[oppositeClueIndex[i]],
            );
            clues[oppositeClueIndex[i]] = 0;
        } else {
            cluesCopy[i] = getAllClueOptions(clues[i]);
        }
    }

    return cluesCopy;
}

module.exports = { getAllClueOptions, getAllCluesOptions };
