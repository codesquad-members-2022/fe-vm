import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
`;

export const Main = styled.main`
  width: ${({ theme: { layout } }) => layout.mainWidth};
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 200px;
  > div {
    width: ${({ theme: { layout } }) => layout.mainWidth};
    margin: 0 auto;
  }
`;
