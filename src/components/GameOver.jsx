/**
 * GameOver Component
 * -------------------
 * Displays the game result (winner or draw) and provides an option to restart.
 *
 * The winner's name is derived from the <App /> component to avoid unnecessary
 * re-renders when the player name is updated at every keystroke.
 * Instead, the state is updated only when the user saves the name,
 * ensuring better performance.
 */

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}
      <p><button onClick={onRestart}>Rematch!</button></p>
    </div>
  );
}

export default GameOver;
