function getListStudents() {
  return [
    { id: 1, name: 'John Doe', location: 'San Francisco' },
    { id: 2, name: 'Jane Smith', location: 'New York' },
    { id: 3, name: 'Alice Johnson', location: 'San Francisco' },
    { id: 4, name: 'Chris Lee', location: 'Los Angeles' },
  ];
}

function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((sum, student) => sum + student.id, 0);
}

const students = getListStudents(); // Ensure this function is defined
const totalStudentIdsSum = getStudentIdsSum(students);
console.log(totalStudentIdsSum);
