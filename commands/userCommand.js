const { show } = require('../TODO_work/showTODO');
const { fixLengths } = require('../TODO_work/parseTODO');

function showUser(todo_object, username) {
    let todo_filtered_object = filter(todo_object.matrix, username);
    return show(todo_filtered_object.matrix, todo_filtered_object.lengths);
}

function filter(todo_matrix, username){
    let filtered_matrix = [],
        filtered_length = [1, 0, 0, 0, 0],
        username_reg = new RegExp(`(^${username}).*?`,'gi');
    todo_matrix.forEach(element => {
        if (element[1].match(username_reg)){
            filtered_matrix = [...filtered_matrix, element];
        }
    });
    fixLengths(filtered_matrix, filtered_length);
    return { matrix: filtered_matrix, lengths: filtered_length };
}

module.exports = {
    showUser,
};