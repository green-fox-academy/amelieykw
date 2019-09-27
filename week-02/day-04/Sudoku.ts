'use strict';

// create an initial white board
function print_board(rowNb: number, colNb: number): string[][] {
    let row: number = 0, col: number = 0, result: string[][] = [];
    while (row < rowNb) {
        let currentRow: string[] = [];
        while (col < colNb) {
            currentRow.push('_');
            col++;
        }
        result[row] = currentRow;
        col = 0;
        row++;
    }
    return result;
}
// test function print_board
let board = print_board(9, 9);
// console.log(board);

/**
 * initiate the white board with data
 *
 * @param {object} board 2D array contains all "#"s
 * @param {object} data  2D array where each entry is a position of a data described like (rowIndex, colIndex, value) 
 * @returns {void}
 */
function init_board(board: string[][], data: string[][]): void {
    // corner case
    if (data == null) {
        return;
    }
    for (let i = 0; i < data.length; i++) {
        let currentData = data[i];
        board[+currentData[0]][+currentData[1]] = currentData[2];
    }
}

// test function init_board
let init_data: string[][] = [
    ['0', '0', '6'],
    ['0', '2', '5'],
    ['0', '7', '9'],
    ['1', '5', '7'],
    ['1', '7', '2'],
    ['2', '0', '1'],
    ['3', '3', '9'],
    ['3', '5', '8'],
    ['4', '6', '5'],
    ['5', '0', '4'],
    ['5', '6', '1'],
    ['5', '8', '6'],
    ['6', '1', '8'],
    ['6', '5', '3'],
    ['7', '3', '5'],
    ['7', '4', '1'],
    ['8', '1', '2'],
];

// init board with initial data
init_board(board, init_data);
console.log("Before : ");
console.log(board);

/**
 * N-queue solution for each number in [1, 9]
 *
 * @param {string[][]} board 2d array contains initial data
 * @param {string} data current number to put into this board to satisfy the n-queue problem
 * @param { Map } onePossiblePosition used for depth-first recursion + backtracking, each element = [IndexOfRow, IndexOfCol]
 * @param { string[][] } totalPositions final positions for this dataToPutIntoBoard, index means which row, value means which column
 * @returns {void}
 */
function nQueueForEachNumber(board: string[][], dataToPutIntoBoard: string, onePossiblePosition: string[], totalResult: string[][]): void {
    // base case
    if (onePossiblePosition.length == board[0].length) {
        if (totalResult[0].length == 0) {
            totalResult[0] = onePossiblePosition.concat([]);
        }
        return;
    }
    // induction rule
    for (let i = 0; i < board[0].length; i++) { // opt. on each row 
        let dejaExistInRow = board[onePossiblePosition.length].indexOf(dataToPutIntoBoard);
        if (dejaExistInRow != -1 || valide(board, onePossiblePosition, i, onePossiblePosition.length, +dataToPutIntoBoard)) {
            if (onePossiblePosition.length == 0 && dataToPutIntoBoard == '2') {
                console.log(onePossiblePosition.length + "," + i + " = " + board[onePossiblePosition.length][i] + " #### " + valide(board, onePossiblePosition, i, onePossiblePosition.length, +dataToPutIntoBoard));
            }
            if (dejaExistInRow != -1) {
                onePossiblePosition.push(dejaExistInRow + '');
            } else {
                onePossiblePosition.push(i + '');
            }
            nQueueForEachNumber(board, dataToPutIntoBoard, onePossiblePosition, totalResult);
            onePossiblePosition.pop();
        }
    }
}

/**
 * check if valide in same row / column
 *
 * @param {string[][]} board
 * @param {number} rowIndexToPut index of row where to dataToPutIntoBoard
 * @param {number} colIndexToPut index of column where to dataToPutIntoBoard
 * @param {string} dataToPutIntoBoard
 * @param {string[]} onePossiblePosition possible positions to check, index of each element means which row, value of each element means which column 
 * @returns {boolean}
 */
function valide(board: string[][], onePossiblePosition: string[], indexOfColumn: number, rowToPut: number, dataToPutIntoBoard: number): boolean {
    for (let i = 0; i < onePossiblePosition.length; i++) {
        if (onePossiblePosition[i] == indexOfColumn + '') {
            return false;
        }
    }
    if (board[rowToPut][indexOfColumn] != '_') {
        return false;
    }
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (board[rowIndex][indexOfColumn] == dataToPutIntoBoard + '') {
            return false;
        }
    }
    return true;
}

function sudoku(board: string[][], dataToPutIntoBoard: string): void {
    
    let totalResult: string[][] = [];
    let onePossiblePosition: string[] = [];
    totalResult[0] = [];

    // test 1
    nQueueForEachNumber(board, dataToPutIntoBoard + '', onePossiblePosition, totalResult);

    let positions = totalResult[0];
    
    console.log(dataToPutIntoBoard + '=>' + totalResult[0]);

    // modify the board with the positions of dataToPutIntoBoard
    for (let i = 0; i < positions.length; i++) {
        console.log(i + ' | ' + positions[i]);
        board[i][+positions[i]] = dataToPutIntoBoard + '';
    }

    console.log(board);
}

// test
for (let i = 1; i <= board.length; i++) {
    sudoku(board, i+'');
}

