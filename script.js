'use strict';

// creating a constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding methods (Never do this)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3.{} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// statis method
Person.hey = function () {
  console.log('Hey there 🖐');
  console.log(this);
};

Person.hey();
// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);

// Array.prototype.unique = function () {
//   return [...new set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector('h1');

// Challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   const curSpeed = 10 + this.speed;
//   console.log(`${this.make} going at ${curSpeed} km/hr`);
// };

// car1.accelerate();
// car2.accelerate();

// Car.prototype.brake = function () {
//   const curBrake = 5 + this.speed;
//   console.log(`${this.make} going at ${curBrake} km/hr`);
// };

// car1.brake();
// car2.brake();

// ES6 Classes

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //  set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 🖐');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in Strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = firstName;
  },
};

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedy) {
    this.speed = speedy * 1.6;
  }
}

const car1 = new CarCl('BMW', 120);
car1.accelerate();
car1.brake();

const car2 = new CarCl('Mercedes', 95);
const car3 = new CarCl('Ford', 120);
