export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const departments = Object.keys(employeesList);
      return departments.length;
    },
  };
}
