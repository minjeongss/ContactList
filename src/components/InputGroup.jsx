export default function InputGroup({ groupOption, setData, setGroupModal }) {
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
    </div>
  );
}
