import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';  
import RobotsList from './components/RobotsList'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><Header/><LoginForm/><Footer/></div>} />
                <Route path="/robotslist" element={<div><Header/><RobotsList/><Footer/></div>} />
            </Routes>
        </Router>
    );
}

export default App;
