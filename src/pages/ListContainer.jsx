import List from "../components/List";
import Search from "../components/Search";

export default function ListContainer({ data, setData }) {
  return (
    <div>
      <Search />
      {data.name.map((elem, idx) => (
        <List
          key={idx}
          index={idx}
          name={elem}
          phone={data.phone[idx]}
          group={data.group[idx]}
          setData={setData}
        />
      ))}
    </div>
  );
}
