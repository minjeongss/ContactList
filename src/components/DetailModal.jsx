export default function DetailModal(props) {
  return (
    <div>
      <button
        onClick={() =>
          props.setDetailModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
      >
        닫기
      </button>
      <div>
        <h2>연락처 상세 정보</h2>
        <ul>
          <li>이름: {props.name}</li>
          <li>전화번호: {props.phone}</li>
          <li>그룹: {props.group}</li>
          <li>메모: {props.comment}</li>
        </ul>
      </div>
    </div>
  );
}
