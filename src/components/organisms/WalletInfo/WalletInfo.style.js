import styled from 'styled-components';

import { COLOR } from '@constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 800px;
  height: 800px;
  background-color: ${COLOR.LIGHT_BLUE};
  border-radius: 10px;
  padding: 70px 55px;
`;

export { Container };
