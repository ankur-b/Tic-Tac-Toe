export default function GameOver({winner,onRestart}:{winner:string,onRestart:()=>void}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p><button>Rematch!</button> </p>
    </div>
  );
}
 