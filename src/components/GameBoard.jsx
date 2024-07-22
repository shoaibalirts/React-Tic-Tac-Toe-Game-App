import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectedSquare = (rowIndex, columnIndex) => {
    // goal is to update the gameBoard dynamically
    // 1) update only one Value, either X or O
    //      a) we need to update the previous state so we have to use callback function
    //      a) player 1 is using X and player 2 is using )
    //      b) which player has clicked has to be founded out
    //      c) place X or O on each grid item
    //
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; // updated array by immutable way which is strongly recommended
      updatedBoard[rowIndex][columnIndex] = "X"; // [0][0], [0][1], [0][2],
      return updatedBoard;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => handleSelectedSquare(rowIndex, columnIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
