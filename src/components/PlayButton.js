import React from "react";
import { useGameContext } from "../hooks/useGameContext";

const PlayButton = ({ btnName }) => {
  const { initRoll, playerTurn, gameEnded } = useGameContext();

  const handleClick = () => {
    initRoll(playerTurn);
  };

  return (
    <button
      style={{ marginTop: "2em" }}
      onClick={handleClick}
      disabled={gameEnded}
    >
      {btnName}
    </button>
  );
};

export default PlayButton;
