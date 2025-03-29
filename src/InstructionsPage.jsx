// src/InstructionsPage.js
import React from 'react';
import './InstructionsPage.css';
import { useNavigate } from 'react-router-dom';

const InstructionsPage = () => {
    const navigate = useNavigate();
    const handleMenu = () => {
        navigate('/')
    }
  return (
    <div className="instructions-container">
      <h1 className="instructions-title">Instructions</h1>
      <p className="instructions-text">
        Welcome to the Story Adventure! In this game, you'll be presented with
        a series of choices that shape the direction of the story.
      </p>
      <p className="instructions-text">
        Your goal is to navigate through different storylines and make the best
        decisions to achieve the best outcome!
      </p>
      <ul className="instructions-list">
        <li>Read the story text carefully.</li>
        <li>Make choices by clicking the buttons provided.</li>
        <li>Your decisions will lead to different outcomes.</li>
        <li>Try to explore all possible paths for the best experience!</li>
      </ul>
      <button className="back-button" onClick={handleMenu}>Back to Menu</button>
    </div>
  );
};

export default InstructionsPage;
