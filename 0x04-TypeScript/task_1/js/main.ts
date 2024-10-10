// src/index.ts

interface Teacher {
    readonly firstName: string; // Read-only; modifiable only during initialization
    readonly lastName: string; // Read-only; modifiable only during initialization
    fullTimeEmployee: boolean; // Required
    yearsOfExperience?: number; // Optional
    location: string; // Required
    [key: string]: any; // Allow additional properties
}

// Create teacher instances
const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: false,  // Additional property
};

const teacher2: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    yearsOfExperience: 5, // Optional property
};

// Additional teacher example
const teacher3: Teacher = {
    firstName: 'Michael',
    lastName: 'Brown',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // Additional property
};

// Function to log teacher information
function logTeacher(teacher: Teacher) {
    console.log(teacher);
}

// Log the teachers
logTeacher(teacher1);
logTeacher(teacher2);
logTeacher(teacher3);

// src/index.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

function logDirector(director: Directors) {
    console.log(director);
}

logDirector(director1);

// src/index.ts

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// src/index.ts

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("Alice", "Johnson");
console.log(student.workOnHomework());
console.log(student.displayName());
