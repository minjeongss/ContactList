import { useState } from "react";

export default function GroupModal({ groupOption, setGroupOption }) {
  const [newGroup, setNewGroup] = useState("");
  const addGroup = () => {
    setGroupOption((prev) => [...prev, newGroup]);
    setNewGroup("");
  };
  const deleteGroup = (index) => {
    setGroupOption((prev) => prev.filter((_, idx) => idx !== index));
  };
  return (
    <div>
      <button>닫기</button>
      <div>
        <h2>그룹 관리</h2>
        <ul>
          {groupOption.map((elem, idx) => (
            <li key={idx}>
              <span>{elem}</span>
              <button onClick={() => deleteGroup(idx)}>X</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="새 그룹 이름"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
        />
        <button onClick={addGroup}>추가</button>
      </div>
    </div>
  );
}
