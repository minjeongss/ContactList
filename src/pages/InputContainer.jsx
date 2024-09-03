import { useState } from "react";
import InputGroup from "../components/InputGroup";
import InputText from "../components/InputText";
import "../styles/InputContainer.css";

export default function InputContainer(props) {
  const type = ["이름", "전화번호", "간단한 기록"];
  const [newData, setNewData] = useState({
    name: "",
    phone: "",
    group: props.groupOption[0],
    comment: "",
  });
  const addData = () => {
    props.setData((prev) => ({
      name: [...prev.name, newData.name],
      phone: [...prev.phone, newData.phone],
      group: [...prev.group, newData.group],
      comment: [...prev.comment, newData.comment],
    }));
    setNewData({
      name: "",
      phone: "",
      group: props.groupOption[0],
      comment: "",
    });
  };
  return (
    <div className="inputContainer">
      <InputText
        type={type[0]}
        data={newData.name}
        setData={(value) => setNewData({ ...newData, name: value })}
      />
      <InputText
        type={type[1]}
        data={newData.phone}
        setData={(value) => setNewData({ ...newData, phone: value })}
      />
      <InputGroup
        groupOption={props.groupOption}
        setGroupOption={props.setGroupOption}
        setData={(value) => setNewData({ ...newData, group: value })}
      />
      <InputText
        type={type[2]}
        data={newData.comment}
        setData={(value) => setNewData({ ...newData, comment: value })}
      />
      <button onClick={addData}>저장</button>
      <button onClick={() => console.log(props.data)}>확인</button>
    </div>
  );
}
