// ES5: object literal, object constructor
const user = {};
const user2 = new Object();

// ES5: Object Property Initializer
var getUser = function (name, age) {
    return {
        name: name,
        age: age,
    };
};
// ES6: Object Property Initializer
const getUser2 = (name, age) => {
    return {
        name,
        age,
    };
};

console.log(getUser2('Piroska', 18));

// ES5: computed property name
var employee = {
    id: 101,
    name: 'Amit',
};
const department = 'dep_name';
employee[department] = 'Sales';
console.log(employee);

// ES6: computed property name
const employee2 = {
    id: 102,
    name: 'Amit',
    [department]: 'Sales',
};
console.log(employee2);

// ES5: object method
var employee3 = {
    id: 101,
    name: 'Amit',
    getName: function () {
        return this.name;
    }
};
console.log(employee3.getName());

// ES5: object method
const employee4 = {
    id: 101,
    name: 'Amit',
    getName() {
        return this.name;
    }
};
console.log(employee4.getName());

// ES5: merge two objects
const car = {
    type: '',
    year: 2018,
    price: 0,
    notice: 'nice car',
};
const serverResponse = {
    type: 'VW Jetta',
    year: 2019,
    price: 15000,
    color: 'red',
};
const finalCar = Object.assign({}, car, serverResponse);
console.log(finalCar);

// ES5: cloning.
const newCar = car;
newCar.type = 'Tesla';
console.log( car.type );

const newCar2 = Object.assign({}, car);
newCar2.type = 'Renault';
console.log( car.type );

// ES6: Object.assign
const car3 = {...car, ...serverResponse};
console.log(car3);
const car4 = {type: 2, type: 5};
console.log(car4);

// ES6: Object clone
const car5 = {...car};
console.log( car5 );

// ES6: destructuring
const {type, year} = car3;
console.log( type, year );
const { type: carType } = car3;
console.log( carType );

const {type: type2, ...args} = car;
console.log( args );

// ES6: Object setters and getters
const language = {
    set log(name) {
        if (Array.isArray(name)) {
            this.savedLog.push(...name);
        } else {
            this.savedLog.push(name);
        }
    },
    get log() {
        return this.savedLog;
    },
    savedLog: [],
};
language.log = ['es', 'en'];
language.log = 'hu';
language.log = 'ru';
console.log( language.log );

// this context
const language2 = {
    set log(name) {
        this.savedLog.push(name);
    },
    get log() {
        return this.savedLog;
    },
    savedLog: [],
    sum() {
        const to = setTimeout( () => {
            clearTimeout(to);
            console.log(this);
            console.log( this.savedLog.length );
        }, 500);
    },
};
language2.log = 'magyar';
console.log( language2.sum() );
