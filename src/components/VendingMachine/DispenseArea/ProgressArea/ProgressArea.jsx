import styled from "styled-components";

const ProgressArea = () => {
  return <Wrapper>투입되었습니다...</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 1.1rem;
  height: calc(100% - 10rem);
  max-height: calc(100% - 10rem);
  overflow-y: auto;
  background-color: #000;
  color: #fff;
  padding: 1rem;
`;

export default ProgressArea;
