import "../styles/ErrorText.css";
export default function ErrorText({ type }) {
  return (
    <div className="error">
      {type === "name"
        ? "이름은 한글로 두 글자 이상 입력해주세요."
        : "전화번호는 -를 제외한 숫자만 입력해주세요."}
    </div>
  );
}
