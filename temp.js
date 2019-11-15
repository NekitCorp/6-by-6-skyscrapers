const test = new Array(36).fill(1).map((el, i) => el + i);
// prettier-ignore
const good = [ 2, 1, 4, 3, 5, 6, 1, 6, 3, 2, 4, 5, 4, 3, 6, 5, 1, 2, 6, 5, 2, 1, 3, 4, 5, 4, 1, 6, 2, 3, 3, 2, 5, 4, 6, 1];

const arr = [3, 4, 2, 5, 1, 6]; // 4

/**
 * Get row by number in flat matrix 6x6
 * @param array Flat matrix 1x36
 * @param number Number from 1 to 6
 */
function getRow(array, number) {
    return array.slice((number - 1) * 6, number * 6);
}

/**
 * Get column by number in flat matrix 6x6
 * @param array Flat matrix 1x36
 * @param number Number from 1 to 6
 */
function getColumn(array, number) {
    const result = [];

    for (let index = 0; index < 6; index++) {
        result.push(array[number - 1 + index * 6]);
    }

    return result;
}

/**
 * No two skyscrapers in a row or column may have the same number of floors
 * @param array Flat matrix 1x36
 */
function check(array) {
    if (array.some(el => el === null)) {
        return true;
    }

    const template = [1, 2, 3, 4, 5, 6].toString();

    for (let index = 1; index < 7; index++) {
        if (
            getRow(array, index)
                .sort()
                .toString() !== template ||
            getColumn(array, index)
                .sort()
                .toString() !== template
        ) {
            return false;
        }
    }

    return true;
}

/**
 * Get the number of visible skyscrapers
 * @param array Flat matrix 1x36
 * @param side 'top', 'left', 'bottom', 'right'
 * @param number Number from 1 to 6
 */
function getVisibleCount(array, side, number) {
    switch (side) {
        case 'left':
            return getVisibleCountFromRow(getRow(array, number));
        case 'right':
            return getVisibleCountFromRow(getRow(array, number).reverse());
        case 'top':
            return getVisibleCountFromRow(getColumn(array, number));
        case 'bottom':
            return getVisibleCountFromRow(getColumn(array, number).reverse());
    }
}

/**
 * Get the number of visible skyscrapers from row
 * @param array Array of 6 numbers from 1 to 6
 */
function getVisibleCountFromRow(array) {
    return array.map((el, i) => array.slice(0, i).filter(left => el < left).length).filter(el => el === 0).length;
}

/**
 * Check clues
 * @param array Flat matrix 1x36
 * @param clues Clues 1x24
 */
function checkClues(array, clues) {
    if (array.some(el => el === null)) {
        return true;
    }

    const topClues = clues.slice(0, 6);
    const rightClues = clues.slice(6, 12);
    const bottomClues = clues.slice(12, 18);
    const leftClues = clues.slice(18, 24);

    const top = [];
    const right = [];
    const bottom = [];
    const left = [];

    new Array(6)
        .fill(1)
        .map((el, i) => el + i)
        .forEach(number => {
            top.push(getVisibleCount(array, 'top', number));
            right.push(getVisibleCount(array, 'right', number));
            bottom.unshift(getVisibleCount(array, 'bottom', number));
            left.unshift(getVisibleCount(array, 'left', number));
        });

    return (
        topClues.toString() === top.toString() &&
        rightClues.toString() === right.toString() &&
        bottomClues.toString() === bottom.toString() &&
        leftClues.toString() === left.toString()
    );
}

/**
 * Brute force method
 * @param array Flat matrix 1x36
 * @param clues Clues 1x24
 */
function bruteForce(array, clues) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (array[i * 6 + j] === null) {
                for (let k = 1; k <= 6; k++) {
                    array[i * 6 + j] = k;

                    console.log(i, j, k);

                    if (check(array) && checkClues(array, clues)) {
                        if (bruteForce(array, clues)) {
                            return true;
                        }
                    }

                    array[i * 6 + j] = null;
                }

                return false;
            }
        }
    }

    return true;
}

/**
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

/**
 * 1: (120)
 * 2: (274)
 * 3: (225)
 * 4: (85)
 * 5: (15)
 * 6: (1)
 */
function getAllClueOptions() {
    const allOptions = perm([1, 2, 3, 4, 5, 6]);
    const result = {};

    for (let clue = 1; clue < 7; clue++) {
        result[clue] = allOptions.filter(o => getVisibleCountFromRow(o) === clue);
    }

    return result;
}

function check2(array, row, col, k) {
    for (let i = 0; i < 6; i++) {
        if (board[row][i] === k || board[i][col] === k) {
            return false;
        }
    }

    return true;
}

const allOptions = getAllClueOptions();

function bruteForce2(array, clues) {
    for (let i = 0; i < clues.length; i++) {
        const options = allOptions[i];

        for (let j = 0; j < options.length; j++) {
            if (array[i * 6 + j] === null) {
                for (let k = 1; k <= 6; k++) {
                    array[i * 6 + j] = k;

                    console.log(i, j, k);

                    if (check(array) && checkClues(array, clues)) {
                        if (bruteForce(array, clues)) {
                            return true;
                        }
                    }

                    array[i * 6 + j] = null;
                }

                return false;
            }
        }
    }

    return true;
}

const clues = [3, 2, 2, 3, 2, 1, 1, 2, 3, 3, 2, 2, 5, 1, 2, 2, 4, 3, 3, 2, 1, 2, 2, 4];

// bruteForce(new Array(36).fill(null), clues);
