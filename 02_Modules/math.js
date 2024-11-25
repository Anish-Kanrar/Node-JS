function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

// exporting the modules -->

// Method 1--->
module.exports = { add, sub, mul, div, mod };

/*

// Method 2--->
module.exports ={
    addFn: add,
    subFn: sub,
    mulFn: mul,
    divFn: div,
    modFn: mod
}

//Method 3 --->
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
exports.mul = (a,b) => a*b;
exports.div = (a,b) => a/b;
exports.mod = (a,b) => a%b;

*/