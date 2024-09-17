import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects'; 
import BigFeelingsProject from './Pages/Big-Feelings-Project'; 
import './App.css'; 
import './Styling/Setup.css'; 
import './Styling/Projects.css'; 
import './Styling/Big-Feelings.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/big-feelings-project" element={<BigFeelingsProject />} /> {/* Add route for Big Feelings Project */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;