import { turnsType } from "../App";

export default function GameBoard({onSelectSquare,activePlayerSymbol,turns}:{onSelectSquare:(rowIndex:number,colIndex:number)=>void,activePlayerSymbol:string,turns:turnsType}) {
  const initialGameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  // const [gameBoard,setGameBoard] = useState(initialGameBoard)

  // const handleSelectSquare=(rowIndex:number,colIndex:number)=>{
  //   setGameBoard((prevGameBoard)=>{
  //       const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]
  //       updatedBoard[rowIndex][colIndex]=activePlayerSymbol
  //       return updatedBoard
  //   })
  //   onSelectSquare()
  // }
  let gameBoard = initialGameBoard

  for(const turn of turns){
    const {square,player} =turn
    const {row,col} = square
    gameBoard[row][col] = player
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row,rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==''}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
      ))}
    </ol>
  );
}
