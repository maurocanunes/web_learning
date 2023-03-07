function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied!";

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

const player = 'bobby';
let experience = 100;
let wizardLevel = false

if (experience > 90) {
    wizardLevel = true;
}

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const { player, experience } = obj;
let {wizardLevel} = obj;

const jName = 'john swow';

const obj = {
    [jName]: 'hello',
    [1 + 2]: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`

function greet(name='', age=30, pet='cat'){

}

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(10); // results in 5 * 10

//compose
const compose = (f, g) => (a) => f(g(a)); 

const sum = (num) => num + 1;

compose(sum, sum)(5) // a = 5 f(g(5)) -> f(sum(5)) = 6 -> sum(6) = 7

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log('mapArray', mapArray);

//filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray)

// reduce

const reduceArray = array.reduce((accmulator, num) => {
    return accmulator + num;
}, 0);

console.log('reduce', reduceArray);

refecence type

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context vs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type); //calls the constructor of the extended class
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj)); // [this is a deep clone] json changes everything into a string and then the string back to a obj

obj.c.deep = 'hahahah';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

'Turtle'.padStart(10);
"          Turtle"
'Turtle'.padEnd(10);
"Turtle          "

let obj = {
    username0: 'Santa',
    username1: 'Rudelf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

