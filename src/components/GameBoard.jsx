function GameBoard({ onSelectSquare, board }) {
  /**
   * The GameBoard component renders the Tic-Tac-Toe board.
   * Instead of managing its own state, the board is derived from props.
   *
   * This ensures state consistency between GameBoard and Log components,
   * since both need to reflect the same game state.
   */
  
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
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

export default GameBoard;
