//primitive types 

//  1.  Checking for case sensitive
function cases(str) {
    if (str === str.toUpperCase()) {
        return true
    }
    else {
        return false;
    }
}
console.log(cases('JAVASCRIPT'))

//2. Setting the fractional number to n decimal points
let num = 20.223536
console.log(num.toFixed(2))


//Display type of DataType
function typeOfType() {
    console.log(typeof 2);
    console.log(typeof 'str');
    console.log(typeof new Number(0));
    let zero = new Number(0);
    if (zero) {
        console.log("zero is truthy!?!");
    }
}

typeOfType();



