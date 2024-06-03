
import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeService';
import SearchFilter from './SearchFilter';
import { createFuzzySearch } from '../services/searchService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  const filteredEmployees = employees.filter(e => {
    return (!selectedDepartment || e.department === selectedDepartment) &&
      (!selectedExperience || e.experience >= selectedExperience) &&
      (!searchText || createFuzzySearch(employees)(searchText).includes(e));
  });

  return (
    <div>
      <SearchFilter
        searchText={searchText}
        onSearchTextChange={setSearchText}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
        selectedExperience={selectedExperience}
        onExperienceChange={setSelectedExperience}
      />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id}>{employee.name} - {employee.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
