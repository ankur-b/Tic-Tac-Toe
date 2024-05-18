import { useState } from "react";

export default function Player(props: {
  name: String;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: String) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.name);
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        onChange={(event) => setPlayerName(event.target.value)}
        defaultValue={props.name as string}
      />
    );
  }
  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
