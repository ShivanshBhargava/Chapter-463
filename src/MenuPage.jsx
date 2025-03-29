import React from 'react';
import './MenuPage.css';
import gameLogo from './game-logo.jpeg';
import { useNavigate } from 'react-router-dom';


const MenuPage = () => {
    const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };
  const handleInstructions = () => {
    navigate('/instructions')
  }
  return (
    <div className="menu-container">
      <h1 className="game-title">Chapter 463</h1>
      <h3 className="game-author">A game by LoneLight</h3>
      <img src={gameLogo} alt="gamer icon" className="game-icon" />
      <div className="button-container">
        <button className="menu-button" onClick={handleStartGame}>Start Game</button>
        <button className="menu-button" onClick={handleInstructions}>Instructions</button>
      </div>
    </div>
  );
};

export default MenuPage;
