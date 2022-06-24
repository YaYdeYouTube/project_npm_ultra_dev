function add(x = Number, y = Number) {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
}
function substract(x=Number, y=Number){
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
}
function multiplication(x=Number, y=Number){
    const result = x * y;
    console.log(`${x} x ${y} = ${result}`);
}
function division(x=Number, y=Number){
    const result = x / y;
    console.log(`${x} / ${y} = ${result}`);
}

module.exports = {
    add: add, 
    substract: substract,
    multiplication: multiplication,
    division: division
}
