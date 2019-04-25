function show (matrix, lengths){
    let todo_matrix = JSON.parse(JSON.stringify(matrix)),
        string = '-'.repeat(lengths.reduce((a, b) => {return a + b}) + 24);
    todo_matrix = [['!', 'user', 'date', 'comment', 'fileName'],  ...todo_matrix];
    let max_lengths = [1, 10, 10, 50, 15],
        table = '';
    todo_matrix.forEach((element) => {
        for (let i = 0; i < element.length; i++){
            if (element[i].length > max_lengths[i]){
                element[i] = element[i].substr(0, max_lengths[i] - 5) + '(...)'
            }
            table += `  ${element[i]}${' '.repeat(lengths[i] - element[i].length)}  ${i === 4 ? '' : '|'}`;
        }
        table += '\n';
    });
    table = table.replace(/\n/, `\n${string}\n`);
    table += string;
    return table;
}

module.exports = {
    show,
};