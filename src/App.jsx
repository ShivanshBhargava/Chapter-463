// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuPage from './MenuPage';
import GamePage from './GamePage';
import InstructionsPage from './InstructionsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
