function createConsoleMessage(message){
    console.log(message);
}
function createList(list=[String]){
    console.log(list)
}

module.exports = {
    createConsoleMessage: createConsoleMessage,
    createList: createList
}
