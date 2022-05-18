import styled from 'styled-components';

import { COLOR } from '@constants';

const Container = styled.div`
  width: 250px;
  height: 300px;
  background-color: ${COLOR.OFF_WHITE};
  border-radius: 7px;
  overflow: hidden;
  padding: 16px;
`;

const LogBox = styled.ul`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export { Container, LogBox };
