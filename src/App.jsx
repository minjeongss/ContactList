import { useState } from "react";
import Header from "./pages/Header";
import InputContainer from "./pages/InputContainer";
import ListContainer from "./pages/ListContainer";
import GroupModal from "./components/GroupModal";
import DetailModal from "./components/DetailModal";
import "./styles/App.css";

function App() {
  const [groupModal, setGroupModal] = useState(false);
  const [detailModal, setDetailModal] = useState({
    isOepn: false,
    name: "",
    phone: "",
    group: "",
    comment: "",
  });
  //구조 설계
  //1안: 객체 안에 배열
  //2안: 배열 안에 객체
  //참고주소: https://velog.io/@rimo09/useState%EC%83%81%ED%83%9C%EB%A1%9C-%EC%97%AC%EB%9F%AC%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9-vs-object-%EC%82%AC%EC%9A%A9-%EC%96%B4%EB%96%A4%EA%B2%8C-%EC%A2%8B%EC%9D%84%EA%B9%8C
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
          setGroupModal={setGroupModal}
        />
        <ListContainer
          data={data}
          setData={setData}
          setDetailModal={setDetailModal}
        />
        {groupModal ? (
          <GroupModal
            groupOption={groupOption}
            setGroupOption={setGroupOption}
            setGroupModal={setGroupModal}
          />
        ) : (
          ""
        )}
        {detailModal.isOpen ? (
          <DetailModal
            name={detailModal.name}
            phone={detailModal.phone}
            group={detailModal.group}
            comment={detailModal.comment}
            setDetailModal={setDetailModal}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
