import { createGlobalStyle } from "styled-components";

const Normalize = createGlobalStyle`
  * {
    box-sizing: border-box;
    
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default Normalize;
