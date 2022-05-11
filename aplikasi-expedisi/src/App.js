import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cekharga from './components/Cekharga';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cekharga" element={<Cekharga />} />
      </Routes>
    </Router>
  );
}

export default App;
