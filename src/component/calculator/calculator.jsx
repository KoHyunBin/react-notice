import { useState } from "react";
import Result from "./result";

export default function Calculator() {
  // const 지정한다.
  // 첫번째 변수는 진짜변수 값을 읽는 용도 (쓸 수 없음)
  // 두번째 변수는 값을 수정하는 용도(읽을 수 없음)
  // () 사이에 값은 초기 값
  const [resultData, setResultData] = useState(0);

  function addPlus() {
    setResultData(resultData + 1);
    console.log(resultData);
  }

  return (
    <>
      <h2>1씩 더하기</h2>
      <button onClick={addPlus}>1씩 더하기</button>

      <Result inputData={resultData} />
    </>
  );
}
