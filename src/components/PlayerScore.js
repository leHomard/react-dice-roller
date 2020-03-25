import React from "react";

const PlayerScore = ({ player, score }) => {
  return (
    <div>
      <h2>{player}</h2>
      <span>Score : {score}</span>
    </div>
  );
};

export default PlayerScore;
