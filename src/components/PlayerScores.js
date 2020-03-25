import React from "react";
import styled from "styled-components";

import PlayerScore from "./PlayerScore";
import { useGameContext } from "../hooks/useGameContext";

const ScoresContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PlayerScores = () => {
  const { playerAScore, playerBScore } = useGameContext();
  return (
    <ScoresContainer>
      <PlayerScore player="Player A" score={playerAScore} />
      <PlayerScore player="Player B" score={playerBScore} />
    </ScoresContainer>
  );
};

export default PlayerScores;
