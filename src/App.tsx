import Player from "./components/Player";

function App() {
  return (
    <div>
      <header>
        <img src="game-logo.png" alt="Hand Drawn tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name='Player 1' symbol='X' />
            <Player name='Player 2' symbol='O' />
          </ol>
          Game Board
        </div>
      </main>
    </div>
  );
}

export default App;
