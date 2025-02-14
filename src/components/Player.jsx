import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function editClickHandler() {
    // instead of setIsEditing(!isEditing) we use the following:
    setIsEditing((isEditing) => !isEditing);
    // simply because it works with the latest value of the isEditing
    // variable and the former isn't and this is the best practice for
    // updating the state, based on the previous states

    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    // event is the name I set for the object that describes the event,
    // it automatically gets the parameter since we're passing a
    // pointer to the <input /> element
    setPlayerName(event.target.value);
    // event.target is the property which refers to the element that
    // did the "emit the event" which is the input element,
    // (yani event.target bu eventi ortaya cikaran elemana isaret eder)
    // <input /> element does have a value property that defines the
    // keystroke i.e. input, and since we're handing the name, or in
    // otherwords the function pointer, to the <input /> element, it
    // is updated in every keystroke
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
      // by the way, this way of listening to a change on the input
      // and then feeding the updated value to the function back is
      // called "two-way binding" because we're getting a value out
      // and feeding the same value back in.
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
