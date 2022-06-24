console.log("Welcome to the npm module **Ultra dev** !")

const fMaths = require('./function/Maths/maths');
const add = fMaths.add;
const substract = fMaths.substract;
const multiplication = fMaths.multiplication;
const division = fMaths.division;

module.exports = {
    add: add,
    substract: substract,
    multiplication: multiplication,
    division: division
}
