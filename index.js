// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St."
}
// Define the function updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  
  // Define the function destructivelyUpdateEmployeeWithKeyAndValue
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }
  
  // Define the function destructivelyDeleteFromEmployeeByKey
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
  }
  
 // Define the function destructivelyDeleteFromEmployeeByKey
 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee
  }
