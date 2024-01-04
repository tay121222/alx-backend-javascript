export default function createReportObject(employeesList) {
  const employeeAll = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return employeeAll;
}
