import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winningCombinations";

function deriveActivePlayer(gameTurns:turnsType) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState<turnsType>([]);
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <div>
      <header>
        <img src="game-logo.png" alt="Hand Drawn tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
            activePlayerSymbol={activePlayer}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </div>
  );
}

export type turnsType = Array<{
  square: { row: number; col: number };
  player: string;
}>;
export default App;
