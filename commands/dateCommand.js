const { show } = require('../TODO_work/showTODO');
const { fixLengths } = require('../TODO_work/parseTODO');

function showDate(todo_object, date) {
    let todo_filtered_object = filter(todo_object.matrix, date);
    return show(todo_filtered_object.matrix, todo_filtered_object.lengths);
}

function filter(todo_matrix, date){
    let filtered_matrix = [],
        filtered_length = [1, 0, 0, 0, 0];
    todo_matrix.forEach(element => {
        let todo_date = new Date(element[2]);
        if (todo_date >= date){
            filtered_matrix = [...filtered_matrix, element];
        }
    });
    fixLengths(filtered_matrix, filtered_length);
    return {matrix: filtered_matrix, lengths: filtered_length};
}

module.exports = {
    showDate,
};