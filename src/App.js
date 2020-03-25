import React from "react";
import styled from "styled-components";

import DiceBoard from "./components/DiceBoard";
import PlayButton from "./components/PlayButton";
import { GameProvider } from "./contexts/gameProvider";
import PlayerScores from "./components/PlayerScores";
import GameProgress from "./components/GameProgress";

const AppContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <GameProvider>
      <AppContainer className="App">
        <GameProgress title="Welcome to Dice Roller game" />
        <DiceBoard />
        <PlayButton btnName="Roll the dice" />
        <hr />
        <PlayerScores />
      </AppContainer>
    </GameProvider>
  );
}

export default App;
