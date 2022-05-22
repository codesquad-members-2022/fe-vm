import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const Main = styled.div`
  ${Flex.center}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

const WrapperWidth = {
  '/': '960px',
  '/wallet': '850px',
};

const ContentsWrapper = styled.div`
  ${Flex.centerBetween}
  width: ${({ path }) => WrapperWidth[path]};
  min-width: ${({ path }) => WrapperWidth[path]};
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export { Main, ContentsWrapper };
