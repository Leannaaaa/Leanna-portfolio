import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/DesktopHome';
import Projects from './Pages/Projects';
import BigFeelingsProject from './Pages/Big-Feelings-Project'; 
import MobileHome from './Pages/MobileHome';
import './App.css';
import './Styling/Setup.css';
import './Styling/Projects.css';
import './Styling/Big-Feelings.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile or tablet
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); 
  };

  useEffect(() => {
    checkIfMobile(); 

    window.addEventListener('resize', checkIfMobile); 
    return () => window.removeEventListener('resize', checkIfMobile); 
  }, []);

  return (
    <Router>
      <div className="App">
        {isMobile ? (
          <Routes>
            <Route path="/" element={<MobileHome />} /> 
          </Routes>
        ) : (
          // Desktop-specific routes
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/big-feelings-project" element={<BigFeelingsProject />} /> 
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
