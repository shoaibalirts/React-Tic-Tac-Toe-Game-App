const initialGameBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function GameBoard() {
  const handleGetValue = (event) => {
    console.log(event.target.value);
  };
  return (
    <ol id="game-board">
      {initialGameBoard.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={handleGetValue}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
