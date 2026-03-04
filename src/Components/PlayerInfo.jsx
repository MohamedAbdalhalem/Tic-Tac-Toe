import { useState } from "react";

export default function PlayerInfo({ initialName, symbol,isActive,onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [finalName, setFinalName] = useState(initialName)
  function handleEdit() {
    setIsEditing(editing => !editing);
    if (isEditing) {
      onChangeName(symbol,finalName)
    }
  }
  function handleEditName(e) {
    setFinalName(e.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{finalName}</span>}
        {isEditing && <input type="text" value={finalName} onChange={handleEditName} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
