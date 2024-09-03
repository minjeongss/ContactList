import { useState } from "react";
import List from "../components/List";
import Search from "../components/Search";

export default function ListContainer({ data, setData }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div>
      <Search
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      {searchKeyword === ""
        ? data.name.map((elem, idx) => (
            <List
              key={idx}
              index={idx}
              name={elem}
              phone={data.phone[idx]}
              group={data.group[idx]}
              setData={setData}
            />
          ))
        : data.name.map((elem, idx) => {
            if (
              data.name[idx] === searchKeyword ||
              data.phone[idx] === searchKeyword ||
              data.group[idx] === searchKeyword
            ) {
              return (
                <List
                  key={idx}
                  index={idx}
                  name={elem}
                  phone={data.phone[idx]}
                  group={data.group[idx]}
                  setData={setData}
                />
              );
            }
          })}
    </div>
  );
}
