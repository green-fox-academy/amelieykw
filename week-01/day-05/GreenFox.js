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

const Person = function (name, age, gender) {
    this.name = (name != undefined) ? name : 'Jane Doe';
    this.age = (age != undefined) ? age : 30;
    this.gender = (gender != undefined) ? gender : 'female';
}

Person.prototype.introduce = function () {
    process.stdout.write("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender);
}

Person.prototype.getGoal = function () {
    process.stdout.write('My goal is: Live for the moment!');
}


// test 
// const amelie = new Person('Amélie', 27, 'female');
// const kaiwen = new Person;

// console.log(amelie.constructor);

// amelie.introduce();
// kaiwen.getGoal();
// kaiwen.introduce();

// Student
// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course
// methods:
// getGoal(): prints out 'My goal is: Be a junior software developer.'
// introduce(): 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
// skipDays(numberOfDays): increases skippedDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0


function Student(name, age, gender, previousOrganization) {
    this.name = (name != undefined) ? name : 'Jane Doe';
    this.age = (age != undefined) ? age : 30;
    this.gender = (gender != undefined) ? gender : 'female';
    this.previousOrganization = (previousOrganization != undefined) ? previousOrganization : 'The School of Life';
    this.skippedDays = 0;
}

Student.prototype.getGoal = function() {
    process.stdout.write('My goal is: Be a junior software developer.');
}

Student.prototype.introduce = function() {
    process.stdout.write("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + " from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
}

Student.prototype.skipDays = function(numberOfDays) {
    this.skippedDays += numberOfDays;
}

// test 
// const student1 = new Student('Kaiwen YU', 27, 'female', 'Amadeus');
// const student2 = new Student();

// student1.getGoal();
// student1.introduce();
// student1.skipDaysYeah(1);

// student2.getGoal();
// student2.introduce();
// student2.skipDaysYeah(1);

// Mentor
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
// introduce(): 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

function Mentor(name, age, gender, level) {
    Person.call(this, name, age, gender);
    this.level = (level != undefined) ? level : 'intermeidate';
}
Mentor.prototype = Object.create(Person.prototype);
Mentor.prototype.constructor = Mentor;

Mentor.prototype.getGoal = function() {
    process.stdout.write('My goal is: Educate brilliant junior software developers.');
}
Mentor.prototype.introduce = function() {
    Person.prototype.introduce.call(this);
    process.stdout.write(" to female, " + this.level + " to intermediate");
}

// test
// const mentor1 = new Mentor;
// console.log(Mentor.prototype);
// mentor1.introduce();
// console.log();
// mentor1.getGoal();

// Sponsor
// Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// company: name of the company
// hiredStudents: number of students hired
// method:
// introduce(): 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
// hire(): increase hiredStudents by 1
// getGoal(): prints out 'My goal is: Hire brilliant junior software developers.'
// The Sponsor class has the following constructors:

// Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
// Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0
function Sponsor(name, age, gender, company) {
    Person.call(this, name, age, gender);
    this.company = (company != undefined) ? company : 'Google';
    this.hiredStudents = 0;
}
Sponsor.prototype = Object.create(Person.prototype);
Sponsor.prototype.constructor = Sponsor;
Sponsor.prototype.introduce = function() {
    Person.prototype.introduce.call(this);
    process.stdout.write(' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
}
Sponsor.prototype.hire = function() {
    this.hiredStudents++;
}
Sponsor.prototype.getGoal = function() {
    process.stdout.write('My goal is: Hire brilliant junior software developers.');
}

// Cohort
// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists
function Cohort(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
}
Cohort.prototype.addStudent = function(student) {
    this.students.push(student);
}
Cohort.prototype.addMentor = function(mentor) {
    this.mentors.push(mentor);
}
Cohort.prototype.info = function() {
    process.stdout.write('The ' + this.name + ' cohort has ' + this.students.length + ' students and ' + this.mentors.length + ' mentors.');
}

// test input
const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  console.log();
  person.getGoal();
  console.log();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
console.log();

