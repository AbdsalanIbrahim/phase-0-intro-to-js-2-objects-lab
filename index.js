const employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const { [key]: _, ...newEmployee } = employee;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
console.log(updatedEmployee); // { name: "John Doe", streetAddress: "123 Main St", city: "New York" }

const mutatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "Los Angeles");
console.log(mutatedEmployee); // { name: "John Doe", streetAddress: "123 Main St", city: "Los Angeles" }

const employeeWithoutCity = deleteFromEmployeeByKey(mutatedEmployee, "city");
console.log(employeeWithoutCity); // { name: "John Doe", streetAddress: "123 Main St" }

const finalEmployee = destructivelyDeleteFromEmployeeByKey(mutatedEmployee, "streetAddress");
console.log(finalEmployee); // { name: "John Doe", city: "Los Angeles" }

