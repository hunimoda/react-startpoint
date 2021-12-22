# 리액트 프로젝트 Start Point

자주 사용하는 코드를 모아서 이후 새로운 프로젝트를 시작하기 쉽도록 미리 제작하여 관리하는 패키지이다.

---

## 커스텀 훅

- useInput(validate)
  > > 입력값의 검증을 수행할 수 있도록 외부에서 validation 함수를 인자로 전달받는다. Validation 함수는 검증에 실패할 경우 해당 내용의 에러 메시지를 반환하고 성공할 경우 빈 문자열을 반환한다. 에러 메시지는 input이 사용자에 의해 변경된 경우에만 출력되므로 부모 컴포넌트에서 error의 show 프로퍼티를 먼저 체크하여야 한다.

## UI

- Input(props: {type, id, label, onChange, onBlur, error})
  - type: input의 type 속성 지정
  - id: input과 label을 연결
  - label: label로 사용할 텍스트
  - onChange: 입력값이 바뀔 때 수행할 핸들러 함수
  - onBlur: 컨트롤에서 focus out 시 수행할 핸들러 함수
