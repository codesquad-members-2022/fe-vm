module.exports = {
  arrowParens: "avoid", // 화살표 함수 괄호 사용 방식
  bracketSpacing: false, // 객체 리터럴에서 괄호에 공백 삽입 여부 
  endOfLine: "auto", // EoF 방식, OS별로 처리 방식이 다름 
  htmlWhitespaceSensitivity: "css", // HTML 공백 감도 설정
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부 
  jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
  printWidth: 80, //  줄 바꿈 할 폭 길이
  proseWrap: "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  quoteProps: "as-needed" ,// 객체 속성에 쿼테이션 적용 방식
  semi: true, // 세미콜론 사용 여부
  singleQuote: true, // single 쿼테이션 사용 여부
  tabWidth: 2, // 탭 너비 
  trailingComma: "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  useTabs: false, // 탭 사용 여부
  vueIndentScriptAndStyle: true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
  parser: '', // 사용할 parser를 지정, 자동으로 지정됨
  filepath: '', // parser를 유추할 수 있는 파일을 지정
  rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  insertPragma: false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
};


  // tabWidth: 2, // 들여쓰기는 2칸
  // useTabs: false, // Tab 대신에 스페이스 사용
  // semi: true, // 코드 마지막에 세미콜른 추가
  // singleQuote: true, // 문자열을 싱글 따옴표로 설정
  // trailingComma: "all", // 객체, 배열의 원소 뒤에 항상 콤마를 추가함
  // printWidth: 80, // 코드 한줄의 최대 길이는 80
  // arrowParens: "avoid", // Arrow 함수에서 하나의 매개변수를 받을때는 괄호를 생략