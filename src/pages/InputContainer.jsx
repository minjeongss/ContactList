import { useState } from "react";
import InputGroup from "../components/InputGroup";
import InputText from "../components/InputText";
import "../styles/InputContainer.css";
import ErrorText from "../components/ErrorText";

export default function InputContainer(props) {
  const type = ["이름", "전화번호", "간단한 기록"];
  const [error, setError] = useState({
    name: false,
    phone: false,
  });
  const [newData, setNewData] = useState({
    name: "",
    phone: "",
    group: props.groupOption[0],
    comment: "",
  });
  const checkValidation = () => {
    let isChecked = false;
    const nameRegex = /^[ㄱ-ㅎ가-힣]{2,}$/;
    const phoneRegex = /^(010{1})([0-9]{4})([0-9]{4})$/;

    if (nameRegex.test(newData.name)) {
      setError((prev) => ({
        ...prev,
        name: false,
      }));
      isChecked = true;
    } else {
      setError((prev) => ({
        ...prev,
        name: true,
      }));
      isChecked = false;
    }
    if (phoneRegex.test(newData.phone)) {
      setError((prev) => ({
        ...prev,
        phone: false,
      }));
      isChecked ? true : false;
    } else {
      setError((prev) => ({
        ...prev,
        phone: true,
      }));
      isChecked = false;
    }

    return isChecked;
  };
  const addData = () => {
    props.setData((prev) => ({
      name: [...prev.name, newData.name],
      phone: [...prev.phone, newData.phone],
      group: [...prev.group, newData.group],
      comment: [...prev.comment, newData.comment],
    }));
  };
  const resetData = () => {
    setNewData({
      name: "",
      phone: "",
      group: props.groupOption[0],
      comment: "",
    });
    setError({
      name: false,
      phone: false,
    });
  };

  const handleData = () => {
    if (checkValidation()) {
      addData();
      resetData();
    }
  };
  return (
    <div className="inputContainer">
      <InputText
        type={type[0]}
        data={newData.name}
        setData={(value) => setNewData({ ...newData, name: value })}
      />
      {error.name ? <ErrorText type="name" /> : ""}
      <InputText
        type={type[1]}
        data={newData.phone}
        setData={(value) => setNewData({ ...newData, phone: value })}
      />
      {error.phone ? <ErrorText type="phone" /> : ""}
      <InputGroup
        groupOption={props.groupOption}
        setData={(value) => setNewData({ ...newData, group: value })}
        setGroupModal={props.setGroupModal}
      />
      <InputText
        type={type[2]}
        data={newData.comment}
        setData={(value) => setNewData({ ...newData, comment: value })}
      />
      <button onClick={handleData}>저장</button>
    </div>
  );
}
