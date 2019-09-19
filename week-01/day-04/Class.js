const Student = require('./Student');
const Teacher = require('./Teacher');

// instantiate a Student and Teacher object
let aStudent = new Student(); 
let aTeacher = new Teacher();

aStudent.question(aTeacher);
aTeacher.teach(aStudent);