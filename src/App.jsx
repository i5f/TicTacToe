import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * Determines the active player based on the game history.
 * The first move is always 'X'.
 * The active player alternates after each move.
 */
function deriveActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
}

/**
 * Generates the game board state based on previous moves.
 * This prevents direct state mutations and ensures React's reactivity.
 */
function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }

  return gameBoard;
}

/**
 * Determines the winner based on predefined winning combinations.
 * Returns the winning player's name or null if there is no winner.
 */
function deriveWinner(gameBoard, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      return players[firstSymbol];
    }
  }
  return null;
}

function App() {
  /**
   * State to track player names dynamically, allowing name changes.
   * This is required to persist custom player names across re-renders.
   */
  const [players, setPlayers] = useState(PLAYERS);

  /**
   * Stores the history of moves made in the game.
   * Instead of tracking the board state directly, we derive it from `gameTurns`.
   */
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  /**
   * Handles player moves by adding a new turn to the game history.
   * This approach ensures the game board remains immutable.
   */
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGameTurns];
    });
  }

  /**
   * Resets the game by clearing the move history.
   */
  function handleRestart() {
    setGameTurns([]);
  }

  /**
   * Updates a player's name when edited in the UI.
   */
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }));
  }

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName={players.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
            <Player initialName={players.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
