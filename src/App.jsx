import { useState } from "react";
import Header from "./pages/Header";
import InputContainer from "./pages/InputContainer";
import ListContainer from "./pages/ListContainer";
import "./styles/App.css";

function App() {
  //구조 설계
  //1안: 객체 안에 배열
  //2안: 배열 안에 객체
  const [data, setData] = useState({
    name: [],
    phone: [],
    group: [],
    comment: [],
  });
  const [groupOption, setGroupOption] = useState([
    "가족",
    "친구",
    "직장",
    "스터디",
  ]);
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <InputContainer
          data={data}
          setData={setData}
          groupOption={groupOption}
          setGroupOption={setGroupOption}
        />
        <ListContainer data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;
