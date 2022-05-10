import styled from "styled-components";

const ProgressArea = () => {
  return <Wrapper>투입되었습니다...</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 1.1rem;
  height: calc(100% - 8rem);
  max-height: calc(100% - 8rem);
  overflow-y: auto;
  border: 2px dashed #000;
  padding: 1rem;
`;

export default ProgressArea;
