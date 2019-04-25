const max_lengths = [1, 10, 10, 50, 15];

function getTODO(fileText) {
    let todo_reg = new RegExp("(?<=\/\/( |)TODO( |[:]))(.*?)(?=(\n|$))",'gi'),
        todo_list = [];
    fileText.forEach( element => {
        let todo = element[0].toString().match(todo_reg);
        if (todo){
            todo.forEach(todo => {
                todo_list = [...todo_list, [todo.trim(), element[1].trim()]];
            });
        }
    });

    return todo_list;
}

function matrixTODO(todo_list){
    let matrix = [],
        lengths = [1, 0, 0, 0, 0];
    todo_list.forEach((element, index) => {
        let todo_string = element[0].split(';');
        todo_string = [...todo_string, element[1]];
        if (todo_string.length === 2){
            todo_string = ['', '', ...todo_string];
        }
        matrix[index] = [];
        todo_string[2].includes('!') ? matrix[index][0] = '!' : matrix[index][0] = ' ';
        for (let i = 0; i < todo_string.length; i++){
            todo_string[i] = todo_string[i].trim();
            if (todo_string[i].length - 1 > lengths[i + 1]){
                todo_string[i].length >= max_lengths[i + 1]
                    ? lengths[i + 1] = max_lengths[i + 1]
                    : lengths[i + 1] = todo_string[i].length;
            }
            matrix[index][i + 1] = todo_string[i];
        }
    });

    return { matrix, lengths };
}

function fixLengths(filtered_matrix, filtered_length) {
    let min_lengths = [1, 4, 4, 6, 8];
    filtered_matrix.forEach(sub_mass => {
        sub_mass.forEach((element, index) => {
            if (element.length >= filtered_length[index]){
                if (element.length >= max_lengths[index]){
                    filtered_length[index] = max_lengths[index];
                } else {
                    element.length <= min_lengths[index]
                        ? filtered_length[index] = min_lengths[index]
                        : filtered_length[index] = element.length;
                }
            }
        });
    });
}

module.exports = {
    matrixTODO,
    fixLengths,
    getTODO,
};