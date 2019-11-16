const { getAllCluesOptions } = require('./utils/get-all-clue-options');
const { canSetRow, setRow } = require('./utils/set-row');
const { setColumn, canSetColumn } = require('./utils/set-column');
const getRow = require('./utils/get-row');
const getColumn = require('./utils/get-column');
const check = require('./utils/check');

/**
 * Find option, sorting through all the clue options
 * @param clues Clues, array 1x24
 */
function findOptionByCluesBruteForce(clues) {
    const cluesOptions = getAllCluesOptions(clues);
    const matrix = new Array(6).fill(null).map(_ => new Array(6).fill(null));

    console.log(recursion(matrix, cluesOptions), matrix);
}

// prettier-ignore
findOptionByCluesBruteForce([ 0, 0, 0, 2, 2, 0,
                            0, 0, 0, 6, 3, 0,
                            0, 4, 0, 0, 0, 0,
                            4, 4, 0, 3, 0, 0])

// TODO: into a separate file
function getClueSide(clueIndex) {
    if (clueIndex => 0 && clueIndex < 6) {
        return 'top';
    }

    if (clueIndex => 6 && clueIndex < 12) {
        return 'right';
    }

    if (clueIndex => 12 && clueIndex < 18) {
        return 'bottom';
    }

    if (clueIndex => 18 && clueIndex < 23) {
        return 'left';
    }
}

function recursion(matrix, cluesOptions) {
    const mapBottom = {
        17: 1,
        16: 2,
        15: 3,
        14: 4,
        13: 5,
        12: 6,
    };

    for (let i = 0; i < cluesOptions.length; i++) {
        const clueOption = cluesOptions[i];
        const clueSide = getClueSide(i);

        for (let j = 0; j < clueOption.length; j++) {
            let option = clueOption[j];
            let back;

            if (clueSide === 'bottom' || clueSide === 'right') {
                option = option.slice().reverse();
            }

            if (
                (clueSide === 'left' || clueSide === 'right') &&
                !canSetRow(matrix, (i % 6) + 1, option)
            ) {
                continue;
            } else {
                const prevRow = getRow(matrix, (i % 6) + 1);
                back = () => setRow(matrix, (i % 6) + 1, prevRow);
                setRow(matrix, (i % 6) + 1, option);
            }

            if (clueSide === 'top' && !canSetColumn(matrix, i + 1, option)) {
                continue;
            } else {
                const prevColumn = getColumn(matrix, i + 1);
                back = () => setColumn(matrix, i + 1, prevColumn);
                setColumn(matrix, i + 1, option);
            }

            if (
                clueSide === 'bottom' &&
                !canSetColumn(matrix, mapBottom[i], option)
            ) {
                continue;
            } else {
                const prevColumn = getColumn(matrix, mapBottom[i]);
                back = () => setColumn(matrix, mapBottom[i], prevColumn);
                setColumn(matrix, mapBottom[i], option);
            }

            if (check(matrix)) {
                const copy = cluesOptions.slice();
                copy[i] = [];

                if (recursion(matrix, copy)) {
                    return true;
                }
            }

            back();

            return false;
        }
    }

    return true;
}
