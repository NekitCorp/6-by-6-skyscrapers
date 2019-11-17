const { getAllCluesOptions } = require('./utils/get-all-clue-options');
const { canSetRow, setRow } = require('./utils/set-row');
const { setColumn, canSetColumn } = require('./utils/set-column');
const getRow = require('./utils/get-row');
const getColumn = require('./utils/get-column');
const check = require('./utils/check');

const format = matrix =>
    '\r\n' +
    matrix
        .map(row => row.map(el => (el === null ? '-' : el)).join(' '))
        .join('\r\n') +
    '\r\n';

/**
 * Find option, sorting through all the clue options
 * @param clues Clues, array 1x24
 */
function findOptionByCluesBruteForce(clues) {
    const cluesOptions = getAllCluesOptions(clues);
    const matrix = new Array(6).fill(null).map(_ => new Array(6).fill(null));

    console.log(recursion(matrix, cluesOptions));
    process.stdout.write(format(matrix));
}

// prettier-ignore
findOptionByCluesBruteForce([ 0, 0, 0, 2, 2, 0,
                            0, 0, 0, 6, 3, 0,
                            0, 4, 0, 0, 0, 0,
                            4, 4, 0, 3, 0, 0])

// prettier-ignore
findOptionByCluesBruteForce([ 3, 2, 2, 3, 2, 1,
    1, 2, 3, 3, 2, 2,
    5, 1, 2, 2, 4, 3,
    3, 2, 1, 2, 2, 4])

// prettier-ignore
findOptionByCluesBruteForce([ 0, 3, 0, 5, 3, 4,
    0, 0, 0, 0, 0, 1,
    0, 3, 0, 3, 2, 3,
    3, 2, 0, 3, 1, 0])

// TODO: into a separate file
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

    if (clueIndex >= 18 && clueIndex < 23) {
        return 'left';
    }
}

function recursion(matrix, cluesOptions) {
    for (let i = 0; i < cluesOptions.length; i++) {
        const clueOption = cluesOptions[i];
        const clueSide = getClueSide(i);
        const copy = cluesOptions.slice();
        copy[i] = [];

        if (clueOption.length === 0) {
            continue;
        }

        for (let j = 0; j < clueOption.length; j++) {
            let option = clueOption[j];
            let back;

            // if (
            //     getRow(matrix, 1).toString() ===
            //         [null, null, null, 4, 3, null].toString() &&
            //     getRow(matrix, 2).toString() ===
            //         [null, null, null, 2, 6, null].toString() &&
            //     getRow(matrix, 3).toString() ===
            //         [null, null, null, 1, 5, null].toString() &&
            //     getRow(matrix, 4).toString() ===
            //         [6, 5, 4, 3, 2, 1].toString() &&
            //     getRow(matrix, 5).toString() ===
            //         [1, 2, 5, 6, 4, 3].toString() &&
            //     getRow(matrix, 6).toString() ===
            //         [3, 4, 2, 5, 1, 6].toString() &&
            //     option.toString() === [2, 3, 6, 1, 5, 4].toString()
            // ) {
            //     console.log(option.slice(), i);
            //     process.stdout.write(format(matrix.slice()));
            // }

            if (clueSide === 'bottom' || clueSide === 'right') {
                option = option.slice().reverse();
            }

            if (clueSide === 'left' || clueSide === 'right') {
                // prettier-ignore
                const map = { 23: 1, 22: 2, 21: 3, 20: 4, 19: 5, 18: 6,
                              6: 1, 7: 2, 8: 3, 9: 4, 10: 5, 11: 6 };

                if (canSetRow(matrix, map[i], option)) {
                    const prevRow = getRow(matrix, map[i]);
                    back = () => setRow(matrix, map[i], prevRow);
                    setRow(matrix, map[i], option);
                } else {
                    continue;
                }
            }

            if (clueSide === 'top') {
                if (canSetColumn(matrix, i + 1, option)) {
                    const prevColumn = getColumn(matrix, i + 1);
                    back = () => setColumn(matrix, i + 1, prevColumn);
                    setColumn(matrix, i + 1, option);
                } else {
                    continue;
                }
            }

            if (clueSide === 'bottom') {
                const mapBottom = { 17: 1, 16: 2, 15: 3, 14: 4, 13: 5, 12: 6 };

                if (canSetColumn(matrix, mapBottom[i], option)) {
                    const prevColumn = getColumn(matrix, mapBottom[i]);
                    back = () => setColumn(matrix, mapBottom[i], prevColumn);
                    setColumn(matrix, mapBottom[i], option);
                } else {
                    continue;
                }
            }

            if (check(matrix)) {
                if (copy.filter(op => op.length > 0).length === 0) {
                    return true;
                }

                if (recursion(matrix, copy)) {
                    return true;
                }
            }

            back();
        }

        return false;
    }

    return check(matrix);
}
