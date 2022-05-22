import styled from 'styled-components';

const StyledProductSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  border: 1px solid black;
`;

export default StyledProductSection;
