const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
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
  
  // Example usage of the functions:
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
  console.log(updatedEmployee); // { name: "John Doe", streetAddress: "123 Main St", position: "Manager" }
  console.log(employee); // Original employee object remains unchanged
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
  console.log(employee); // { name: "John Doe", streetAddress: "123 Main St", position: "Manager" }
  
  const newEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(newEmployee); // { name: "John Doe", position: "Manager" }
  console.log(employee); // Original employee object remains unchanged
  
  destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(employee); // { name: "John Doe", position: "Manager" }
  
