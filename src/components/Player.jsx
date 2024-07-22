import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const handleEditClick = (event) => {
    setIsEditing((prevState) => !prevState); // toggling between true and false
    // if isEditing false then Edit, otherwise Save
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  console.log(isEditing);
  const inputHandle = (event) => {
    name = event.target.value;
    setNewName(name);
  };

  return (
    <li>
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
      {isEditing && <button onClick={handleSaveClick}>Save</button>}
      {isEditing === false ? (
        <button onClick={handleEditClick}>Edit</button>
      ) : null}
    </li>
  );
}
