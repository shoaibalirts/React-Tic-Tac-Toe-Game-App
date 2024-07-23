import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const handleEditClick = (event) => {
    setIsEditing((prevState) => !prevState); // toggling between true and false
    // if isEditing false then Edit, otherwise Save
    if (isEditing) {
      onChangeName(symbol, newName);
    }
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  // console.log(isEditing);
  const inputHandle = (event) => {
    setNewName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{newName}</span>
        ) : (
          <span>
            <input
              onChange={inputHandle}
              type="text"
              required
              value={newName}
            />
          </span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
