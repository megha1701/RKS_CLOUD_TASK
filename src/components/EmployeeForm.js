
import React, { useState } from 'react';
import { addEmployee, updateEmployee } from '../services/employeeService';

const EmployeeForm = ({ employee, onSave }) => {
  const [formState, setFormState] = useState(employee || { name: '', department: '', skills: '', experience: 0, performanceReviews: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    if (formState.id) {
      updateEmployee(formState).then(onSave);
    } else {
      addEmployee({ ...formState, id: Date.now() }).then(onSave);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="department" value={formState.department} onChange={handleChange} placeholder="Department" />
      <input type="text" name="skills" value={formState.skills} onChange={handleChange} placeholder="Skills" />
      <input type="number" name="experience" value={formState.experience} onChange={handleChange} placeholder="Experience" />
      <input type="text" name="performanceReviews" value={formState.performanceReviews} onChange={handleChange} placeholder="Performance Reviews" />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
