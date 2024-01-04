export default function createEmployeesObject(departmentName, employees) {
  const employeeslist = {
    [departmentName]:
          employees,
  };
  return employeeslist;
}
