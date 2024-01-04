export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeArray = Object.values(allEmployees).map((department) => department);

  return {
    * [Symbol.iterator]() {
      for (const employees of employeeArray) {
        yield* employees;
      }
    },
  };
}
