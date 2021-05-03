// ES1. Var is function scoped.
var company = 'EvoSoft\'s programmers';

// ES6 variables.
let user = 'Józsi';
const age = 33;
// age = 44; // error
const testData = {
    name: 'Márk'
};
testData.name = 'Gábor';

// Types of variables.
// primitives: boolean, number, string, null, undefined, Symbol
// collections: object, array, Map, WeekMap

// Scopes.
console.log(company);
function test() {
    var fnVariable = 'Laci';
    console.log(company);
}
test();
// console.log(fnVariable);

// Block scoped variables.
user = 'Gergely';
{
    let user = 'Norbert';
    console.log(user);
}
console.log(user);
