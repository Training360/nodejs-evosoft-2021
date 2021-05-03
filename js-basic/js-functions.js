// ES5. Function declaration.
function adder(a, b) {
    console.log(a, b);
    return a + b;
}

console.log(adder(2, 5));

// ES6: default arguments.
function multiplier(a = 3, b = 2) {
    return a * b;
}
console.log(multiplier(4, 6));

// Function expression.
const divider = function (a, b) {
    return a / b;
};
console.log(divider(3, 1));

// Callback function.
const myMath = function (a, b, callBack) {
    return callBack(a, b);
};
console.log(myMath(2, 2, adder));
console.log(myMath(2, 2, multiplier));
console.log(myMath(2, 2, divider));

// ES6: spred operator.
const showMessage = function (...args) {
    console.log(args.join(' '));
}
showMessage('Hello', 'my', 'name', 'is', 'Joe!');

console.log(1, 2, 3);
console.log(...[1, 2, 3], 4);

// ES6: arrow funciton (lambda)
const power = (base, p) => {
    return Math.pow(base, p);
};
console.log(power(10, 3));

const logger = message => console.log(message);
logger('hello');

const unnamedFn = function () {
    console.log('hello1');
};
console.log(unnamedFn.toString());
console.log(power.toString());

( () => {
    console.log('IFFE');
} )();
