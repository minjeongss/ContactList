export default function InputText({ type, data, setData }) {
  return (
    <div>
      <label htmlFor={type}>{type}</label>
      <input
        id={type}
        type="text"
        placeholder={type}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
}
