import { useState } from "react";
import GroupModal from "./GroupModal";

export default function InputGroup({ groupOption, setGroupOption, setData }) {
  const [groupModal, setGroupModal] = useState(false);
  return (
    <div>
      <label htmlFor="group">그룹</label>
      <select id="group" onChange={(e) => setData(e.target.value)}>
        {groupOption.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
      <button onClick={() => setGroupModal(true)}>조직 추가</button>
      {groupModal ? (
        <GroupModal groupOption={groupOption} setGroupOption={setGroupOption} />
      ) : (
        ""
      )}
    </div>
  );
}
