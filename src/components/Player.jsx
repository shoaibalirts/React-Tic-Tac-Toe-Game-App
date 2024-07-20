import { useState } from "react";

export default function Player({ name, symbol }) {
  //   const [newName, setNewName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const editClickHandle = () => {
    setIsEditing((prevState) => !prevState);
  };
  console.log(isEditing);
  const inputHandle = (event) => {
    name = event.target.value;
  };
  const onSaveHandle = () => {
    console.log("save clicked");
    setNewName(name);
  };

  return (
    <li>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{name}</span>
        ) : (
          <span>
            <input
              className="player-name"
              onClick={inputHandle}
              type="text"
              name="playerName"
            />
          </span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing === false ? (
        <button onClick={editClickHandle}>Edit</button>
      ) : (
        <button onClick={onSaveHandle}>Save</button>
      )}
    </li>
  );
}
