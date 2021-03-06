// @ts-check
const { getAllCluesOptions } = require('./get-all-clue-options');
const { canSetRow, setRow } = require('./set-row');
const { setColumn, canSetColumn } = require('./set-column');
const getRow = require('./get-row');
const getColumn = require('./get-column');
const check = require('./check');

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

var count = 0;

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
            count++;
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

module.exports = findSolutionByClues;
