import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const Main = styled.div`
  ${Flex.center}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

const pathWidth = {
  '/': '960px',
  '/wallet': '850px',
};

const ContentsWrapper = styled.div`
  ${Flex.centerBetween}
  width: ${({ path }) => pathWidth[path]};
  min-width: ${({ path }) => pathWidth[path]};
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export { Main, ContentsWrapper };
