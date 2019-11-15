const getVisibleCount = require('./get-visible-count');

/**
 * Generate all permutations
 * https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
 */
function perm(xs) {
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
const clueOptionsCache = {}; // TODO: cache

/**
 * Get all options by clue numbers
 * @param clue Clue number from 1 to 6
 * @param oppositeClue Opposite clue Number (if exist) from 1 to 6
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

module.exports = getAllClueOptions;

// for (let i = 1; i < 7; i++) {
//     console.log(i, getAllClueOptions(i));
// }

// for (let i = 1; i < 7; i++) {
//     for (let j = 1; j < 7; j++) {
//         console.log(i, j, getAllClueOptions(i, j));
//     }
// }
