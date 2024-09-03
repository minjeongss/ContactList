export default function List(props) {
  const removeData = () => {
    console.log("삭제");
    props.setData((prev) => ({
      name: prev.name.filter((_, idx) => idx !== props.index),
      phone: prev.phone.filter((_, idx) => idx !== props.index),
      group: prev.group.filter((_, idx) => idx !== props.index),
      comment: prev.comment.filter((_, idx) => idx !== props.index),
    }));
  };
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.phone}</span>
      <span>{props.group}</span>
      <button>세부사항</button>
      <button onClick={removeData}>삭제</button>
    </div>
  );
}
