// src/index.ts
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student instances
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderStudentsTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);

    headerCell1.innerHTML = '<b>First Name</b>';
    headerCell2.innerHTML = '<b>Location</b>';

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
}

// Call the function to render the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderStudentsTable(studentsList);
});
