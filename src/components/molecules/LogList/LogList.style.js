import styled from 'styled-components';

const LogListWrapper = styled.div`
  width: 270px;
  height: 300px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid black;
  padding-left: 10px;
`;

const StyledLogList = styled.ul`
  height: 295px;
  overflow: hidden;
  overflow-y: scroll;
`;

export { LogListWrapper, StyledLogList };
