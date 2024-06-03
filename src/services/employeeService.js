
import axios from 'axios';

const employees = [
  { id: 1, name: 'John Doe', department: 'Engineering', skills: ['React', 'JavaScript'], experience: 5, performanceReviews: ['Excellent', 'Very Good'] },
  // more employees
];

export const getEmployees = () => Promise.resolve(employees);
export const addEmployee = (employee) => {
  employees.push(employee);
  return Promise.resolve();
};
export const updateEmployee = (employee) => {
  const index = employees.findIndex(e => e.id === employee.id);
  if (index !== -1) {
    employees[index] = employee;
  }
  return Promise.resolve();
};
export const deleteEmployee = (id) => {
  const index = employees.findIndex(e => e.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
  }
  return Promise.resolve();
};
