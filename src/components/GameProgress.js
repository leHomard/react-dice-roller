import React from "react";
import { useGameContext } from "../hooks/useGameContext";

const Winner = ({ playerAScore, playerBScore }) => {
  let winnerText = "Winner is : Player A";
  if (playerBScore > playerAScore) {
    winnerText = "Winner is : Player B";
  }
  if (playerAScore === playerBScore) {
    winnerText = "It's a tie !";
  }
  return <h2>{winnerText}</h2>;
};

const GameProgress = ({ title }) => {
  const {
    round,
    playerTurn,
    dieOne,
    dieTwo,
    gameEnded,
    playerAScore,
    playerBScore
  } = useGameContext();
  if (round === 1) return <h2>{title}</h2>;
  return (
    <div>
      {gameEnded && <Winner {...{ playerAScore, playerBScore }} />}
      <h2>target : {round}</h2>
      <span>
        Player {playerTurn} rolled {dieOne + dieTwo}
      </span>
    </div>
  );
};

export default GameProgress;
