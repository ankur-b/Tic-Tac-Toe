import React,{useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {  
  const [activePlayer,setActivePlayer] = useState('X')

  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X'?'O':'X')
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
            <Player name='Player 1' symbol='X' isActive={activePlayer==='X'} />
            <Player name='Player 2' symbol='O' isActive={activePlayer==='O'} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
      </main>
    </div>
  );
}

export default App;
