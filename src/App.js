import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Visualizations from './components/Visualizations';
import SelectionProcess from './components/SelectionProcess';
import Notification from './components/Notification';
import Report from './components/Report';

const App = () => {
  const [notification, setNotification] = React.useState({
    open: false,
    message: ''
  });

  const handleNotification = (message) => {
    setNotification({ open: true, message });
  };

  const closeNotification = () => {
    setNotification({ open: false, message: '' });
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={EmployeeList} />
          <Route path="/add-employee" render={() => <EmployeeForm onSave={() => handleNotification('Employee added successfully!')} />} />
          <Route path="/edit-employee/:id" render={(props) => <EmployeeForm {...props} onSave={() => handleNotification('Employee updated successfully!')} />} />
          <Route path="/visualizations" component={Visualizations} />
          <Route path="/selection-process" component={SelectionProcess} />
          <Route path="/report" component={Report} />
        </Switch>
        <Notification open={notification.open} message={notification.message} onClose={closeNotification} />
      </div>
    </Router>
  );
};

export default App;
