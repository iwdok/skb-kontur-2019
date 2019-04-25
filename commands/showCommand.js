const { show } = require('../TODO_work/showTODO');

function showAll(todo_object) {
    return show(todo_object.matrix, todo_object.lengths);
}

module.exports = {
    showAll,
};