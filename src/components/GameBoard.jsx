export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={playerSymbol !== null}
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
