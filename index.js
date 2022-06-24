console.log("Welcome to the npm module Ultra dev !")

const fMaths = require('./function/Maths/maths');
const add = fMaths.add;
const substract = fMaths.substract;
const multiplication = fMaths.multiplication;
const division = fMaths.division;
const fJsSimple = require('./function/other/js/jsSimple');
const createConsoleMessage = fJsSimple.createConsoleMessage;
const createList = fJsSimple.createList;

module.exports = {
    add: add,
    substract: substract,
    multiplication: multiplication,
    division: division,
    createConsoleMessage: createConsoleMessage,
    createList: createList
}
