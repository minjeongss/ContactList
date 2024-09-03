export default function InputGroup({ groupOption, setData, setGroupModal }) {
  return (
    <div className="inputText">
      <label htmlFor="group">그룹</label>
      <div className="select">
        <select id="group" onChange={(e) => setData(e.target.value)}>
          {groupOption.map((elem) => (
            <option key={elem} value={elem}>
              {elem}
            </option>
          ))}
        </select>
        <button className="actionBtn" onClick={() => setGroupModal(true)}>
          조직 추가
        </button>
      </div>
    </div>
  );
}
