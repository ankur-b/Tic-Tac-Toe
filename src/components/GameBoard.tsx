import { useState } from "react";

export default function GameBoard({onSelectSquare,activePlayerSymbol}:{onSelectSquare:()=>void,activePlayerSymbol:string}) {
  const initialGameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const [gameBoard,setGameBoard] = useState(initialGameBoard)

  const handleSelectSquare=(rowIndex:number,colIndex:number)=>{
    setGameBoard((prevGameBoard)=>{
        const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]
        updatedBoard[rowIndex][colIndex]=activePlayerSymbol
        return updatedBoard
    })
    onSelectSquare()
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row,rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
      ))}
    </ol>
  );
}
