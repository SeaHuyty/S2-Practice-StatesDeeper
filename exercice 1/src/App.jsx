import React from "react";
import { useState } from 'react';

export default function App() {
  const [scorePercentage, getScorePercentage] = useState();

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${scorePercentage * 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (scorePercentage < 4) {
      scoreColor = "#ff0000"; 
    } else if (scorePercentage >= 4 && scorePercentage <= 7) {
      scoreColor = "#f3bc47"; 
    } else {
      scoreColor = "#00ff00"; 
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input 
          type="number" 
          min="0" 
          max="10"
          value={scorePercentage}
          onChange={(e) => getScorePercentage(Number(e.target.value))}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
