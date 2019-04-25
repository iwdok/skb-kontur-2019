const { show } = require('../TODO_work/showTODO');

function showImpotranceSort(todo_object) {
    return show(impotranceSorting(todo_object.matrix), todo_object.lengths);
}

function showUserSort(todo_object) {
    return show(userSorting(todo_object.matrix), todo_object.lengths);
}

function showDateSort(todo_object) {
    return show(dateSorting(todo_object.matrix), todo_object.lengths);
}

function impotranceSorting(todo_matrix) {
    let todo_matrix_sort = JSON.parse(JSON.stringify(todo_matrix));
    todo_matrix_sort.sort((a, b) => {
        if ((a[3].match(/!/g) || []).length > (b[3].match(/!/g) || []).length) {
            return -1;
        } else if ((a[3].match(/!/g) || []).length < (b[3].match(/!/g) || []).length) {
            return 1;
        } else {
            return 0;
        }
    });

    return todo_matrix_sort;
}

function userSorting(todo_matrix) {
    let todo_matrix_sort = JSON.parse(JSON.stringify(todo_matrix));
    todo_matrix_sort.sort((a, b) => {
        if (a[1] === '') return 1;
        if (b[1] === '') return -1;
        if (a[1].toLowerCase() < b[1].toLowerCase()) {
            return -1;
        } else if (a[1].toLowerCase() > b[1].toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });

    return todo_matrix_sort;
}

function dateSorting(todo_matrix) {
    let todo_matrix_sort = JSON.parse(JSON.stringify(todo_matrix));
    todo_matrix_sort.sort((a, b) => {
        let dateA = new Date(a[2]),
            dateB = new Date(b[2]);
        if (dateA == 'Invalid Date') return 1;
        if (dateB == 'Invalid Date') return -1;
        if (dateA > dateB) {
            return -1;
        } else if (dateA < dateB) {
            return 1;
        } else {
            return 0;
        }
    });

    return todo_matrix_sort;
}

module.exports = {
    showImpotranceSort,
    showDateSort,
    showUserSort,
};