const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');
const { showAll } = require('./commands/showCommand');
const { showImportant } = require('./commands/importantCommand');
const { showUser } = require('./commands/userCommand');
const { showDate } = require('./commands/dateCommand');
const { showImpotranceSort, showDateSort, showUserSort } = require('./commands/sortCommand');
const { matrixTODO, getTODO } = require('./TODO_work/parseTODO');

let todo_object = app();

function app () {
    const files = getFiles();
    let todo_list = getTODO(files),
        todo_object = matrixTODO(todo_list);
    console.log('Please, write your command!');
    readLine(processCommand);

    return todo_object;
}

function getFiles () {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => [readFile(path.filePath), path.fileName]);
}

function processCommand (command) {
    switch (true) {
        case /^exit/i.test(command):
            process.exit(0);
            break;
        case /^show/i.test(command):
            console.log(showAll(todo_object));
            break;
        case /^important/i.test(command):
            console.log(showImportant(todo_object));
            break;
        case /^user/i.test(command):
            let username = command.substring(command.search(' '), command.length).trim();
            username.length >= 1
                ? console.log(showUser(todo_object, username))
                : console.log('wrong argument');
            break;
        case /^sort/i.test(command):
            let sort_type = command.split(' ')[1].trim();
            switch (sort_type) {
                case 'importance':
                    console.log(showImpotranceSort(todo_object));
                    break;
                case 'user':
                    console.log(showUserSort(todo_object));
                    break;
                case 'date':
                    console.log(showDateSort(todo_object));
                    break;
                default:
                    console.log('wrong argument');
            }
            break;
        case /^date/i.test(command):
            if (command.split(' ')[1]){
                let date = new Date(command.split(' ')[1].trim());
                date != 'Invalid Date'
                    ? console.log(showDate(todo_object, date))
                    : console.log('wrong argument');
            } else {
                console.log('wrong argument');
            }
            break;
        default:
            console.log('wrong command');
            break;
    }
}

// TODO you can do it!
