
    function add(x=Number, y=Number){
        if (x instanceof Number && y instanceof Number){
            const result = x + y;
            console.log(`${x} + ${y} = ${result}`);
        }else {
            console.log(`The value x or y is not ${Number} !`);
        }
    }
    function substract(x=Number, y=Number){
        if (x instanceof Number && y instanceof Number){
            const result = x - y;
            console.log(`${x} - ${y} = ${result}`);
        }else {
            console.log(`The value x or y is not ${Number} !`);
        }
    }
    function multiplication(x=Number, y=Number){
        if (x instanceof Number && y instanceof Number){
            const result = x * y;
            console.log(`${x} x ${y} = ${result}`);
        }else {
            console.log(`The value x or y is not ${Number} !`);
        }
    }
    function division(x=Number, y=Number){
        if (x instanceof Number && y instanceof Number){
            const result = x / y;
            console.log(`${x} / ${y} = ${result}`);
        }else {
            console.log(`The value x or y is not ${Number} !`);
        }
    }

module.exports = {
    add: add, 
    substract: substract,
    multiplication: multiplication,
    division: division
}
