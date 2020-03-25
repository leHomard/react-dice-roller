import React, { useEffect } from "react";
import styled from "styled-components";
import { random } from "lodash";

import { useGameContext } from "../hooks/useGameContext";

const StyledDiceBoard = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background: #6e00e9;
  border-radius: 1em;
  .dice {
    width: 70px;
    height: 70px;
    border: 1px solid white;
    border-radius: 1rem;
    margin-top: 14px;
    text-align: center;
    color: white;
    line-height: 3.5em;
    font-size: 22px;
  }
`;

const DiceBoard = () => {
  const { dieOne, dieTwo, updateDice, rollingDice } = useGameContext();

  useEffect(() => {
    function rollDice() {
      return {
        dieOne: random(1, 6),
        dieTwo: random(1, 6)
      };
    }

    if (rollingDice) {
      const payload = rollDice();
      updateDice(payload);
    }
  }, [updateDice, rollingDice]);

  return (
    <StyledDiceBoard>
      <div className="dice">{dieOne}</div>
      <div className="dice">{dieTwo}</div>
    </StyledDiceBoard>
  );
};

export default DiceBoard;
