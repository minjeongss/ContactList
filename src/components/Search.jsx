import { useState } from "react";
import "../styles/Search.css";

export default function Search({ setSearchKeyword }) {
  const [currSearchKeyword, setCurrSearchKeyword] = useState("");
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(currSearchKeyword);
    }
  };

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="검색어를 입력 후 엔터를 누르세요"
        value={currSearchKeyword}
        onChange={(e) => setCurrSearchKeyword(e.target.value)}
        onKeyUp={handleEnter}
      />
      <button
        className="actionBtn"
        onClick={() => {
          setSearchKeyword("");
          setCurrSearchKeyword("");
        }}
      >
        전체 리스트 보기
      </button>
    </div>
  );
}
