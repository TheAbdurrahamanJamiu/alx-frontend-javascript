function getListStudents() {
  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Chris Lee' }, // added trailing comma here
  ];
}

function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

const students = getListStudents();
const studentIds = getListStudentIds(students);
console.log(studentIds);
