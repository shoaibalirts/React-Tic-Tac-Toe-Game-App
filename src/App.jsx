import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/WinningCombinations.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]); // array of objects
  // clickbutton are handled by GameBoard
  // it should be lifted up to App
  // then, pass it to Log for displaying grid value
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard; // gameBoard is a derived state from gameTurns state managed in App component
  // gameBoard is derived from turns state, which is managed in App.jsx
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player; // gameBoard[0][0]=X
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const ThirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === ThirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  function handleSelectSquare(rowIndex, colIndex) {
    // handleSelectSquare is used for updating activePlayer state as well as updating gameTurns objects state
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
        }, // this is a new object i am adding to the front of previous turns
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  console.log(gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
