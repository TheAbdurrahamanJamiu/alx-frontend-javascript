function getListStudents() {
  return [
    { id: 1, name: 'John Doe', location: 'San Francisco' },
    { id: 2, name: 'Jane Smith', location: 'New York' },
    { id: 3, name: 'Alice Johnson', location: 'San Francisco' },
    { id: 4, name: 'Chris Lee', location: 'Los Angeles' },
  ];
}

function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }

  return students.filter((student) => student.location === city);
}

const students = getListStudents();
const studentsInSF = getStudentsByLocation(students, 'San Francisco');
console.log(studentsInSF);
