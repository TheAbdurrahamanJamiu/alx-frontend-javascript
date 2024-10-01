export default function createReportObject(employeesList) {
  const allEmployees = {};
  employeesList.forEach((employee) => {
    if (!allEmployees[employee.department]) {
      allEmployees[employee.department] = [];
    }
    allEmployees[employee.department].push(employee.name);
  });

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
