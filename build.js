/**
 * Get the number of visible skyscrapers
 * @param {number[]} array Array of 6 numbers from 1 to 6
 */
function getVisibleCount(array) {
    return array
        .map((el, i) => array.slice(0, i).filter(left => el < left).length)
        .filter(el => el === 0).length;
}

/**
 * Generate all permutations
 * https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
 * @param {number[]} xs Options
 *
 * @returns {number[][]}
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
 * @param {any[]} clues Clues, array 1x24
 *
 * @returns {number[][][]}
 */
function getAllCluesOptions(clues) {
    const cluesCopy = clues.slice();

    for (let i = 0; i < 24; i++) {
        if (cluesCopy[i] === 0) {
            cluesCopy[i] = [];
            continue;
        }

        if (oppositeClueIndex[i] && cluesCopy[oppositeClueIndex[i]]) {
            cluesCopy[i] = getAllClueOptions(
                cluesCopy[i],
                cluesCopy[oppositeClueIndex[i]],
            );
            cluesCopy[oppositeClueIndex[i]] = 0;
        } else {
            cluesCopy[i] = getAllClueOptions(cluesCopy[i]);
        }
    }

    return cluesCopy;
}

/**
 * Get row by number
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Number from 1 to 6
 */
function getRow(matrix, number) {
    return matrix[number - 1];
}

/**
 * Set row
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Row number from 1 to 6
 * @param {number[]} row New row
 */
function setRow(matrix, number, row) {
    matrix[number - 1] = row;
}

/**
 * Check if a row can get up without intersections
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Row number from 1 to 6
 * @param {number[]} row New row
 */
function canSetRow(matrix, number, row) {
    const currentRow = getRow(matrix, number);

    for (let i = 0; i < 6; i++) {
        if (currentRow[i] !== 0 && currentRow[i] !== row[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Get column by number
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Number from 1 to 6
 */
function getColumn(matrix, number) {
    const result = [];

    for (let row = 0; row < 6; row++) {
        result.push(matrix[row][number - 1]);
    }

    return result;
}

/**
 * Set column
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Column number from 1 to 6
 * @param {number[]} column New column
 */
function setColumn(matrix, number, column) {
    for (let i = 0; i < 6; i++) {
        matrix[i][number - 1] = column[i];
    }
}

/**
 * Check if a column can get up without intersections
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} number Column number from 1 to 6
 * @param {number[]} column New column
 */
function canSetColumn(matrix, number, column) {
    const currentColumn = getColumn(matrix, number);

    for (let i = 0; i < 6; i++) {
        if (currentColumn[i] !== 0 && currentColumn[i] !== column[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Check duplicate array values
 * @param {number[]} array Array 1x6
 */
function hasDuplicate(array) {
    const arrayWithoutNulls = array.filter(el => el !== 0);

    return new Set(arrayWithoutNulls).size !== arrayWithoutNulls.length;
}

/**
 * Check matrix by rule:
 * "No two skyscrapers in a row or column may have the same number of floors"
 * @param {number[][]} matrix Matrix 6x6
 */
function check(matrix) {
    for (let i = 1; i < 7; i++) {
        if (
            hasDuplicate(getRow(matrix, i)) ||
            hasDuplicate(getColumn(matrix, i))
        ) {
            return false;
        }
    }

    return true;
}

/**
 * Find solution, sorting through all the clue options
 * @param {number[]} clues Clues, array 1x24
 *
 * @returns {number[][]}
 */
function findSolutionByClues(clues) {
    const cluesOptionsArray = getAllCluesOptions(clues);
    const matrix = new Array(6).fill(0).map(_ => new Array(6).fill(0));
    const cluesOptions = cluesOptionsArray
        .map((options, i) => ({ options, i }))
        .sort((a, b) => a.options.length - b.options.length);

    if (recursion(matrix, cluesOptions)) {
        return matrix;
    } else {
        throw new Error('No solution');
    }
}

// prettier-ignore
const mapClueToNumber = {
    0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6,
    6: 1, 7: 2, 8: 3, 9: 4, 10: 5, 11: 6,
    17: 1, 16: 2, 15: 3, 14: 4, 13: 5, 12: 6,
    23: 1, 22: 2, 21: 3, 20: 4, 19: 5, 18: 6,
};

/**
 * Recursion to find a solution
 * @param {number[][]} matrix
 * @param {{ i: number, options: number[][] }[]} cluesOptions
 */
function recursion(matrix, cluesOptions) {
    for (let i = 0; i < cluesOptions.length; i++) {
        const clueOption = cluesOptions[i];

        if (clueOption.options.length === 0) {
            continue;
        }

        const clueSide = getClueSide(clueOption.i);
        const copyCluesOptions = cluesOptions.map(_ => ({
            i: _.i,
            options: _.options.slice(),
        }));
        copyCluesOptions[i].options = [];

        for (let j = 0; j < clueOption.options.length; j++) {
            let option = clueOption.options[j];
            let back;

            if (clueSide === 'bottom' || clueSide === 'right') {
                option = option.slice().reverse();
            }

            if (clueSide === 'left' || clueSide === 'right') {
                if (canSetRow(matrix, mapClueToNumber[clueOption.i], option)) {
                    const prevRow = getRow(
                        matrix,
                        mapClueToNumber[clueOption.i],
                    );
                    back = () =>
                        setRow(matrix, mapClueToNumber[clueOption.i], prevRow);
                    setRow(matrix, mapClueToNumber[clueOption.i], option);
                } else {
                    continue;
                }
            }

            if (clueSide === 'bottom' || clueSide === 'top') {
                if (
                    canSetColumn(matrix, mapClueToNumber[clueOption.i], option)
                ) {
                    const prevColumn = getColumn(
                        matrix,
                        mapClueToNumber[clueOption.i],
                    );
                    back = () =>
                        setColumn(
                            matrix,
                            mapClueToNumber[clueOption.i],
                            prevColumn,
                        );
                    setColumn(matrix, mapClueToNumber[clueOption.i], option);
                } else {
                    continue;
                }
            }

            if (check(matrix)) {
                if (
                    copyCluesOptions.filter(op => op.options.length > 0)
                        .length === 0
                ) {
                    return true;
                }

                if (recursion(matrix, copyCluesOptions)) {
                    return true;
                }
            }

            back();
        }

        return false;
    }

    return check(matrix);
}

/**
 * Get clue side by clue index
 * @param {number} clueIndex Clue index
 */
function getClueSide(clueIndex) {
    if (clueIndex >= 0 && clueIndex < 6) {
        return 'top';
    }

    if (clueIndex >= 6 && clueIndex < 12) {
        return 'right';
    }

    if (clueIndex >= 12 && clueIndex < 18) {
        return 'bottom';
    }

    if (clueIndex >= 18 && clueIndex < 24) {
        return 'left';
    }
}

/**
 * Get all possible cell options
 * @param {number[][]} matrix Matrix 6x6
 * @param {number} rowNumber Row number
 * @param {number} columnNumber Column number
 */
function getPossibleOptions(matrix, rowNumber, columnNumber) {
    const column = getColumn(matrix, columnNumber);
    const row = getRow(matrix, rowNumber);
    let possibleOptions = [1, 2, 3, 4, 5, 6];

    possibleOptions = possibleOptions.filter(op => !column.includes(op));
    possibleOptions = possibleOptions.filter(op => !row.includes(op));

    return possibleOptions;
}

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

/**
 * Format matrix
 * @param {number[]} clues
 */
function solvePuzzle(clues) {
    const matrix = findSolutionByClues(clues);

    fillEmptyCells(matrix);

    return matrix;
}
