// src/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TypewriterText from './TypewriterText';
import './GamePage.css';

const GamePage = () => {
  const [storyStage, setStoryStage] = useState(0);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [showChoices, setShowChoices] = useState(false);
  const navigate= useNavigate();
  const storyData = {
    0: {
      text: "Welcome to Eldoria, a magical world where adventure awaits. You're a young adventurer with mysterious powers, starting your journey in the peaceful village of Lumenvale.",
      choices: [
        { text: "Explore Lumenvale", nextStage: 1 },
        { text: "Learn about your powers", nextStage: 2 }
      ]
    },
    1: {
      text: "It's the Harvest Festival in Lumenvale. You and your friend Aeris are gathering herbs in the forest when you spot a glowing object under some leaves.",
      choices: [
        { text: "Check the glowing object", nextStage: 3 },
        { text: "Keep gathering herbs", nextStage: 4 }
      ]
    },
    2: {
      text: "Your hands begin to glow with magical energy. The village elder approaches, looking intrigued.",
      choices: [
        { text: "Ask about your powers", nextStage: 5 },
        { text: "Try to control the energy", nextStage: 6 }
      ]
    },
    3: {
      text: "You find a crystal amulet. As you touch it, you see a vision of a dark figure in a desert holding a mysterious tome.",
      choices: [
        { text: "Show Aeris the amulet", nextStage: 7 },
        { text: "Keep it secret", nextStage: 8 }
      ]
    },
    4: {
      text: "The forest feels strange. You hear whispers and spot glowing eyes in the bushes.",
      choices: [
        { text: "Approach the eyes", nextStage: 9 },
        { text: "Run back to village", nextStage: 10 }
      ]
    },
    5: {
      text: "'The Mark of Eldoria!' the elder exclaims. 'You are chosen, child. The prophecies spoke of you.'",
      choices: [
        { text: "Accept the quest", nextStage: 11 },
        { text: "Refuse the quest", nextStage: "end1" }
      ]
    },
    6: {
      text: "The energy forms into a small orb of light, shifting between different shapes - a sword, shield, and staff.",
      choices: [
        { text: "Make it a weapon", nextStage: 12 },
        { text: "Try to disperse it", nextStage: "end2" }
      ]
    },
    7: {
      text: "'This is a relic of the Forgotten Kings!' Aeris says. 'Only those with the Mark can wield it. You're chosen!'",
      choices: [
        { text: "Go to Silverstone", nextStage: 13 },
        { text: "Stay in Lumenvale", nextStage: "end3" }
      ]
    },
    8: {
      text: "A mysterious cloaked figure appears. 'You carry an ancient curse,' they say. 'But this amulet may break it.'",
      choices: [
        { text: "Listen to them", nextStage: 14 },
        { text: "Try to escape", nextStage: "end4" }
      ]
    },
    9: {
      text: "An elf steps from the shadows. 'The forest is corrupted by dark magic. You must leave before it's too late.'",
      choices: [
        { text: "Ask how to help", nextStage: 15 },
        { text: "Return to village", nextStage: "end5" }
      ]
    },
    10: {
      text: "As you run back, you see dark shadows moving between the village houses.",
      choices: [
        { text: "Warn the villagers", nextStage: 16 },
        { text: "Hide and watch", nextStage: "end6" }
      ]
    },
    11: {
      text: "'The Lord of Shadows seeks to return,' the elder explains. 'Only one with the Mark can stop them.'",
      choices: [
        { text: "Train with elder", nextStage: 17 },
        { text: "Seek the Order", nextStage: 18 }
      ]
    },
    12: {
      text: "The light forms into a gleaming sword. As you hold it, ancient memories flood your mind.",
      choices: [
        { text: "Test the sword", nextStage: 19 },
        { text: "Return to elder", nextStage: "end7" }
      ]
    },
    13: {
      text: "On the way to Silverstone, shadow creatures ambush you and Aeris.",
      choices: [
        { text: "Fight with Aeris", nextStage: 20 },
        { text: "Use the amulet", nextStage: "end8" }
      ]
    },
    14: {
      text: "'Follow the path to the Mountain of Lost Echoes,' the figure says. A magical portal opens.",
      choices: [
        { text: "Enter portal", nextStage: 21 },
        { text: "Return to village", nextStage: "end9" }
      ]
    },
    15: {
      text: "'The Lord of Shadows corrupted the forest long ago. They're returning, and this village will fall first.'",
      choices: [
        { text: "Help the elf", nextStage: 22 },
        { text: "Warn others", nextStage: "end10" }
      ]
    },
    16: {
      text: "Dark creatures emerge from the shadows as you warn the villagers.",
      choices: [
        { text: "Help defend", nextStage: 23 },
        { text: "Find the elder", nextStage: "end11" }
      ]
    },
    17: {
      text: "'Your training begins now,' the elder says. 'The darkness will test you.'",
      choices: [
        { text: "Start training", nextStage: 24 },
        { text: "Ask about darkness", nextStage: "end12" }
      ]
    },
    18: {
      text: "The elder gives you a letter for the Order of Light. 'They will test you,' she warns.",
      choices: [
        { text: "Go to Silverstone", nextStage: 25 },
        { text: "Stay for training", nextStage: "end13" }
      ]
    },
    19: {
      text: "The sword cuts cleanly through a tree, leaving a glowing mark. It feels natural in your hands.",
      choices: [
        { text: "Practice more", nextStage: 26 },
        { text: "Return to elder", nextStage: "end14" }
      ]
    },
    20: {
      text: "You and Aeris fight bravely against the shadow creatures. The amulet glows with power.",
      choices: [
        { text: "Continue to Silverstone", nextStage: 27 },
        { text: "Return to Lumenvale", nextStage: "end15" }
      ]
    },
    21: {
      text: "The portal takes you to the Mountain of Lost Echoes. The air is thick with ancient magic.",
      choices: [
        { text: "Explore the mountain", nextStage: 28 },
        { text: "Return to village", nextStage: "end16" }
      ]
    },
    22: {
      text: "The elf teaches you ancient forest magic. Your powers grow stronger.",
      choices: [
        { text: "Help protect the forest", nextStage: 29 },
        { text: "Return to village", nextStage: "end17" }
      ]
    },
    23: {
      text: "You help defend the village against the shadow creatures. The amulet's power protects you.",
      choices: [
        { text: "Continue the fight", nextStage: 30 },
        { text: "Find safety", nextStage: "end18" }
      ]
    },
    24: {
      text: "The elder teaches you powerful magic. You feel ready to face the darkness.",
      choices: [
        { text: "Face the Lord of Shadows", nextStage: "end19" },
        { text: "Continue training", nextStage: "end20" }
      ]
    },
    25: {
      text: "You reach Silverstone and meet the Order of Light. They recognize your potential.",
      choices: [
        { text: "Join the Order", nextStage: "end21" },
        { text: "Return to Lumenvale", nextStage: "end22" }
      ]
    },
    26: {
      text: "Your sword skills improve rapidly. The ancient memories guide your movements.",
      choices: [
        { text: "Face the darkness", nextStage: "end23" },
        { text: "Keep practicing", nextStage: "end24" }
      ]
    },
    27: {
      text: "You reach Silverstone safely. The Order of Light welcomes you as their chosen one.",
      choices: [
        { text: "Accept your destiny", nextStage: "end25" },
        { text: "Return home", nextStage: "end26" }
      ]
    },
    28: {
      text: "At the mountain's peak, you find the ancient weapon needed to defeat the Lord of Shadows.",
      choices: [
        { text: "Take the weapon", nextStage: "end27" },
        { text: "Leave it", nextStage: "end28" }
      ]
    },
    29: {
      text: "With the elf's help, you cleanse the forest of dark magic. The trees whisper their thanks.",
      choices: [
        { text: "Stay in the forest", nextStage: "end29" },
        { text: "Return to village", nextStage: "end30" }
      ]
    },
    30: {
      text: "The village stands strong against the shadows. Your powers have saved many lives.",
      choices: [
        { text: "Protect the village", nextStage: "end31" },
        { text: "Seek greater power", nextStage: "end32" }
      ]
    },
    // Endings
    end1: {
      text: "You choose to live a peaceful life in Lumenvale, ignoring the call of destiny. The village remains safe, but the darkness grows stronger elsewhere.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end2: {
      text: "The energy dissipates, and your powers fade away. You return to a normal life, never knowing what could have been.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end3: {
      text: "You stay in Lumenvale, but the darkness eventually reaches the village. Without your help, the Lord of Shadows claims another victory.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end4: {
      text: "Your attempt to escape fails. The figure's power overwhelms you, and you become trapped in a realm of darkness.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end5: {
      text: "You return to the village, but the forest's corruption spreads. Soon, Lumenvale is surrounded by darkness.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end6: {
      text: "From your hiding place, you watch as the shadows claim the village. Your inaction leads to tragedy.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end7: {
      text: "The elder helps you master your powers. Together, you protect Lumenvale from the darkness.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end8: {
      text: "The amulet's power proves too strong. You lose control, and the shadow creatures overwhelm you.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end9: {
      text: "You return to the village, but the portal's magic has marked you. The shadows follow you home.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end10: {
      text: "Your warning comes too late. The village falls to the darkness, and you barely escape with your life.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end11: {
      text: "The elder's wisdom guides you. Together, you find a way to protect the village from the shadows.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end12: {
      text: "Your questions about the darkness lead to forbidden knowledge. The power corrupts you.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end13: {
      text: "The elder's training proves invaluable. You become a powerful defender of light.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end14: {
      text: "The sword's power proves too much. You lose control and accidentally harm the village.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end15: {
      text: "Your bravery in battle earns the village's respect. You become their protector.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end16: {
      text: "The mountain's magic proves too dangerous. You barely escape with your life.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end17: {
      text: "The forest's magic heals you. You become one with nature, protecting the ancient woods.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end18: {
      text: "You find safety, but at a cost. The village falls while you hide.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end19: {
      text: "With the elder's training, you defeat the Lord of Shadows. Eldoria is saved!",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end20: {
      text: "Your training continues. One day, you'll be ready to face the darkness.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end21: {
      text: "The Order of Light accepts you. You become their champion, destined to protect Eldoria.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end22: {
      text: "You return to Lumenvale, bringing the Order's protection to your village.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end23: {
      text: "Your sword skills prove crucial. You defeat the Lord of Shadows and save Eldoria!",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end24: {
      text: "Your dedication to training makes you a legendary warrior, protecting Eldoria for generations.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end25: {
      text: "As the Order's chosen one, you lead the fight against darkness. Eldoria enters a new age of light.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end26: {
      text: "You return to Lumenvale, bringing the Order's light to protect your home.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end27: {
      text: "With the ancient weapon, you defeat the Lord of Shadows. The mountain's power restores balance to Eldoria.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end28: {
      text: "Leaving the weapon behind, you return home. The darkness continues to grow.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end29: {
      text: "You become the forest's guardian, living in harmony with nature and protecting it from darkness.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end30: {
      text: "Your powers protect the village, making Lumenvale a beacon of light in Eldoria.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end31: {
      text: "You dedicate your life to protecting Lumenvale. The village thrives under your watch.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    },
    end32: {
      text: "Seeking more power, you tap into forbidden magic. The darkness claims you.",
      choices: [
        { text: "Start Over", nextStage: 0 }
      ]
    }
  };

  useEffect(() => {
    const currentStory = storyData[storyStage];
    if (currentStory) {
      setQuestion(currentStory.text);
      setChoices(currentStory.choices);
      setShowChoices(false);
    }
  }, [storyStage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, question.length * 30 + 1000);

    return () => clearTimeout(timer);
  }, [question]);


  const handleChoice = (choice) => {
    setStoryStage(choice.nextStage);
  };

  const handleRestart = () => {
    setStoryStage(0);
  };

  const handleMenu = () =>{
    navigate("/")
  }

  return (
    <div className="game-container2">
      <h1 className="game-title2">Chapter 463</h1>
      <p className="story-text">
        <TypewriterText text={question} speed={30} />
      </p>
      {showChoices && (
        <>
          <div className="choices-container">
            {choices.map((choice, index) => (
              <button
                key={index}
                className="choice-button"
                onClick={() => handleChoice(choice)}
              >
                {choice.text}
              </button>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-evenly', width:'35rem'}}>
          <button className="button-s" onClick={handleRestart}>
            Restart Game
          </button>
          <button className="button-s" onClick={handleMenu}>
            Back to Menu
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GamePage;
