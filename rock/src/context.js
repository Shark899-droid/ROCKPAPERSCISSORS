import React, { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [player1State, setPlayer1State] = useState('SCISSORS');
  const [cpuState, setCpuState] = useState('ROCK');
  const cpuStateArray = ['ROCK', 'PAPER', 'SCISSORS'];
  let [cpuScore, setCpuScore] = useState(0);
  let [player1Score, setPlayer1Score] = useState(0);
  let isActive = true;
  let hasPlayerWon = false;
  let hasCpuWon = false;

  const chooseState = () => {
    if (player1State === 'ROCK' && cpuState === 'SCISSORS') {
      setPlayer1Score(player1Score + 1);
      console.log(player1Score);
    }
    if (player1State === 'ROCK' && cpuState === 'PAPER') {
      setCpuScore(cpuScore + 1);
    }
    if (player1State === 'PAPER' && cpuState === 'SCISSORS') {
      setCpuScore(cpuScore + 1);
    }
    if (player1State === 'PAPER' && cpuState === 'ROCK') {
      setPlayer1Score(player1Score + 1);
      console.log(player1Score);
    }

    if (player1State === 'SCISSORS' && cpuState === 'ROCK') {
      setCpuScore(cpuScore + 1);
    }
    if (player1State === 'SCISSORS' && cpuState === 'PAPER') {
      setPlayer1Score(player1Score + 1);
      console.log(player1Score);
    }
  };

  const ClickedPaper = () => {
    if (isActive) {
      setPlayer1State('PAPER');
      const cpuChoice = Math.floor(Math.random() * 3);
      setCpuState(cpuStateArray[cpuChoice]);

      chooseState();
    }
  };
  const ClickedScissors = () => {
    if (isActive) {
      setPlayer1State('SCISSORS');
      const cpuChoice = Math.floor(Math.random() * 3);
      setCpuState(cpuStateArray[cpuChoice]);

      chooseState();
    }
  };

  const ClickedRock = () => {
    if (isActive) {
      setPlayer1State('ROCK');
      const cpuChoice = Math.floor(Math.random() * 3);
      setCpuState(cpuStateArray[cpuChoice]);

      chooseState();
    }
  };

  if (player1Score === 10) {
    hasPlayerWon = true;
    isActive = false;
  }

  if (cpuScore === 10) {
    hasCpuWon = true;
    isActive = false;
  }

  const restart = () => {
    window.location.reload(true);
  };

  return (
    <AppContext.Provider
      value={{
        ClickedPaper,
        ClickedRock,
        ClickedScissors,
        player1State,
        cpuState,
        player1Score,
        cpuScore,
        hasPlayerWon,
        isActive,
        hasCpuWon,
        restart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
