import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RobotsList from './RobotsList';
import RobotDetail from './RobotDetail';
import Header from './Header'; 
import './LoginForm.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Header /> 
          <div className="row">
            <div className="col-4">
              <RobotsList onRobotSelect={handleRobotSelect} /> 
            </div>
            <div className="col-8">
              <RobotDetail robot={selectedRobot} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
