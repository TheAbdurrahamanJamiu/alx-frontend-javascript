function getListStudents() {
  return [
    { id: 1, name: 'John Doe', location: 'San Francisco' },
    { id: 2, name: 'Jane Smith', location: 'New York' },
    { id: 3, name: 'Alice Johnson', location: 'San Francisco' },
    { id: 4, name: 'Chris Lee', location: 'Los Angeles' },
  ]; // No trailing spaces here
}

function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeObj = newGrades.find(
        (grade) => grade.studentId === student.id, // Removed newline before `)`
      ); // No trailing spaces and ensured the structure is correct

      return {
        ...student,
        grade: newGradeObj ? newGradeObj.grade : 'N/A', // Added trailing comma here
      };
    }); // No trailing spaces on this line
}

const students = getListStudents();
const newGrades = [
  { studentId: 31, grade: 78 }, // Added trailing comma
  { studentId: 22, grade: 85 }, // Added trailing comma
];
const updatedStudentsInSF = updateStudentGradeByCity(students, 'San Francisco', newGrades);
console.log(updatedStudentsInSF);
