/**
 * Log Component
 * -------------
 * Displays a history of moves made in the game.
 * Each turn is recorded with the player's symbol and the selected square coordinates.
 * This helps in tracking the sequence of moves.
 */

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
