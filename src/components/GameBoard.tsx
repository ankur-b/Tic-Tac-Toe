
export default function GameBoard({onSelectSquare,board}:{onSelectSquare:(rowIndex:number,colIndex:number)=>void,activePlayerSymbol:string,board:string[][]}) {

  // const [gameBoard,setGameBoard] = useState(initialGameBoard)

  // const handleSelectSquare=(rowIndex:number,colIndex:number)=>{
  //   setGameBoard((prevGameBoard)=>{
  //       const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]
  //       updatedBoard[rowIndex][colIndex]=activePlayerSymbol
  //       return updatedBoard
  //   })
  //   onSelectSquare()
  // }
  

  return (
    <ol id="game-board">
      {board.map((row,rowIndex) => (
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
