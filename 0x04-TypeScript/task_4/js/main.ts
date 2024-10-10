// Subjects.ts

import Subjects from './Teacher';
import './Cpp';
import './Java';
import './React';

// Create and export constants for subject instances
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Create and export a Teacher object with experienceTeachingC
const cTeacher: Subjects.Teacher = {
    firstName: "Alice",
    lastName: "Smith",
    experienceTeachingC: 10 // Teacher with experience in C
};

// Exporting constants and teacher
export { cpp, java, react, cTeacher };
