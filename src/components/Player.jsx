import { useState } from "react";

/**
 * Player Component
 * ----------------
 * Manages a player's name and allows editing.
 * Implements two-way binding to update the name dynamically.
 *
 * Props:
 * - initialName: Default player name.
 * - symbol: 'X' or 'O' indicating the player's symbol.
 * - isActive: Boolean indicating if this player is the active player.
 * - onChangeName: Function to update the player's name in the parent component.
 */

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  /**
   * Toggles editing mode and updates the player's name in the parent component.
   */
  function editClickHandler() {
    setIsEditing((isEditing) => !isEditing);
    
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  /**
   * Updates the playerName state on input change (two-way binding).
   */
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{buttonText}</button>
    </li>
  );
}

export default Player;
