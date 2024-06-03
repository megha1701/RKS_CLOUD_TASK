
import React from 'react';

const SearchFilter = ({ searchText, onSearchTextChange, selectedDepartment, onDepartmentChange, selectedExperience, onExperienceChange }) => {
  return (
    <div>
      <input type="text" value={searchText} onChange={(e) => onSearchTextChange(e.target.value)} placeholder="Search by name" />
      <select value={selectedDepartment} onChange={(e) => onDepartmentChange(e.target.value)}>
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
      </select>
      <select value={selectedExperience} onChange={(e) => onExperienceChange(e.target.value)}>
        <option value="">All Experience Levels</option>
        <option value="1">1+ years</option>
        <option value="3">3+ years</option>
        <option value="5">5+ years</option>
      </select>
    </div>
  );
};

export default SearchFilter;
