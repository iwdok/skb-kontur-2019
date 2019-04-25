const { show } = require('../TODO_work/showTODO');
const { fixLengths } = require('../TODO_work/parseTODO');

function showImportant(todo_object) {
    let todo_filtered_object = filter(todo_object.matrix);
    return show(todo_filtered_object.matrix, todo_filtered_object.lengths);
}

function filter(todo_matrix){
    let filtered_matrix = [],
        filtered_length = [1, 0, 0, 0, 0];
    todo_matrix.forEach(element => {
        if (element[0] === '!'){
            filtered_matrix = [...filtered_matrix, element];
        }
    });
    fixLengths(filtered_matrix, filtered_length);
    return {matrix: filtered_matrix, lengths: filtered_length};
}

module.exports = {
    showImportant,
};