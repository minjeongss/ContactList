import { forwardRef } from "react";
import "../styles/Input.css";

const InputText = forwardRef(({ type, data, setData }, ref) => {
  return (
    <div className="inputText">
      <label htmlFor={type}>{type}</label>
      <input
        ref={ref} // ref를 input 요소에 전달
        id={type}
        type="text"
        placeholder={type}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
});
InputText.displayName = "InputText";
export default InputText;
