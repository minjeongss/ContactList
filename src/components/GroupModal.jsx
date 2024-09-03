import { useState } from "react";
import "../styles/GroupModal.css";
export default function GroupModal({
  groupOption,
  setGroupOption,
  setGroupModal,
}) {
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
      <div className="modalBackground"></div>
      <div className="groupModal">
        <button className="closeBtn" onClick={() => setGroupModal(false)}>
          닫기
        </button>
        <div className="groupModalContent">
          <h2>그룹 관리</h2>
          <ul>
            {groupOption.map((elem, idx) => (
              <li key={idx}>
                <span>{elem}</span>
                <button onClick={() => deleteGroup(idx)}>X</button>
              </li>
            ))}
          </ul>
          <div className="groupModalInput">
            <input
              type="text"
              placeholder="새 그룹 이름"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            />
            <button onClick={addGroup}>추가</button>
          </div>
        </div>
      </div>
    </div>
  );
}
