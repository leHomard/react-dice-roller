import React, { createContext } from "react";
import { useImmer } from "use-immer";

const defaultState = {
  dieOne: 0,
  dieTwo: 0,
  round: 1,
  playerAScore: 0,
  playerBScore: 0,
  playerTurn: null,
  rollingDice: false,
  gameEnded: false
};

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useImmer({ ...defaultState });

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
