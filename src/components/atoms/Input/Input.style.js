import styled from 'styled-components';

const StyledInput = styled.input`
  width: 260px;
  height: 80px;
  padding-right: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.xxLarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  text-align: right;
`;

export default StyledInput;
