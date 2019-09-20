'use strict';

// Person
// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (integer number)
// gender: the gender of the person (male / female)
// And the following methods:

// introduce(): prints out 'Hi, I'm name, a age year old gender.'
// getGoal(): prints out 'My goal is: Live for the moment!'
// And the following constructors:

// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female

function Person () {
    // constructor Person()
}

function Person (name, age, gender) {
    this.name = name,
    this.age = age;
    this.gender = gender;
}

Person.prototype.introduce = function () {
    console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender);
}

Person.prototype.getGoal = function () {
    console.log('My goal is: Live for the moment!');
}

// test 
const amelie = new Person('Amélie', 27, 'female');
const kaiwen = new Person();

amelie.introduce();
kaiwen.getGoal();
kaiwen.introduce();